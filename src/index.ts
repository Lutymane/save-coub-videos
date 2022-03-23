import axios from "axios";
import fs from "fs";
import path from "path";
import { Stream } from "stream";
import { Timeline } from "timeline";

import chalk from "chalk";

const { green: suc, yellow: warn, red: err } = chalk;

//https://coub.com/api/v2/timeline/channel/lite.one?order_by=newest&permalink=lite.one&type=&page=1

//let coubsList = [];

let accountHandle = process.argv[2];

if (!accountHandle) {
  throw `${err("Account handle is empty!")}\nUsage: ${suc("node .")} ${warn("account_handle")}`;
}

console.log(`Archiving ${warn(accountHandle)}`);

let coubsData = [];

const archivePages = async (page: number = 1) => {
  return axios
    .get<Timeline>(`https://coub.com/api/v2/timeline/channel/${accountHandle}`, {
      params: {
        order_by: "newest",
        page,
        per_page: 25,
      },
      responseType: "json",
    })
    .then(({ data: tl }) => {
      //save data
      coubsData = coubsData.concat(tl.coubs);

      //download
      let coubDownloads: Promise<any>[] = tl.coubs.map(
        (
          {
            id,
            recoub_to,
            file_versions: {
              html5: { video, audio },
              share: { default: loopURL },
            },
          },
          i
        ) => {
          if (recoub_to) id = recoub_to.id;

          let fileURLs = [];

          {
            let { higher, high, med } = video;
            fileURLs.push((higher || high || med).url);
          }

          if (audio) {
            let { higher, high, med } = audio;
            fileURLs.push((higher || high || med).url);
          }

          // save only if existing?
          // if (loopURL) {
          //   //fs.writeFileSync(i + "_error.json", JSON.stringify(tl.coubs[i], null, 4));
          //   fileURLs.push(loopURL);
          // }

          let fileDownloads = fileURLs.map((url) => {
            let fileName = id.toString() + "." + url.split(".").pop(); //url.split("/").pop();
            let filePath = path.join("archive", fileName);

            if (!fs.existsSync(filePath))
              return axios
                .get<Stream>(url, {
                  responseType: "stream",
                })
                .then(({ data }) => {
                  data.pipe(fs.createWriteStream(filePath));

                  console.log(suc(`${fileName} saved`));
                });
            else console.log(warn(`${fileName} already exists`));
          });

          return Promise.all(fileDownloads);
        }
      );

      if (tl.total_pages > tl.page) {
        coubDownloads.push(archivePages(tl.page + 1));
      }

      return Promise.all(coubDownloads);
    });
};

archivePages().then(() => {
  console.log(suc(`Saved ${coubsData.length} coubs`));
  fs.writeFileSync(path.join("archive", "defs.json"), JSON.stringify(coubsData, null, 2));
});
