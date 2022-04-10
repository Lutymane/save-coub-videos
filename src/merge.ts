import { execSync } from "child_process";
import { readFileSync } from "fs";
import type { Coub } from "timeline";

import chalk from "chalk";
const { green: suc, yellow: warn, red: err } = chalk;

// duration is only video duration, coub dur is determined by audio track
const ffmpegMerge = (id: number) =>
  //`ffmpeg -stream_loop -1 -i archive/${id}.mp3 -i archive/${id}.mp4 -t ${duration} -c:v libvpx-vp9 ${id}.webm`;
  `ffmpeg -stream_loop -1 -i archive/${id}.mp3 -i archive/${id}.mp4 -c:v libx264 -threads 8 -c:a copy archive/loop_${id}.mp4`;

const coubs = JSON.parse(readFileSync("./archive/defs.json").toString()) as Coub[];

coubs.forEach(({ id, recoub_to, duration }) => {
  if (recoub_to) id = recoub_to.id;

  execSync(ffmpegMerge(id, duration));

  console.log(suc(`${id} merged`));
});
