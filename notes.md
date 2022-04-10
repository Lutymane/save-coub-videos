# download in browser

https://stackoverflow.com/questions/41938718/how-to-download-files-using-axios

https://stackoverflow.com/questions/8608724/how-to-zip-files-using-javascript

you can then merge audio + video with ffmpeg
`ffmpeg -y -stream_loop -1 -i video -i audio.mp3 -fflags +shortest -max_interleave_delta 50000 -c libx264 output.mp4`

`ffmpeg -stream_loop -1 -i input.gif -i audio.mp3 -shortest -fflags +shortest -max_interleave_delta 100M -movflags +faststart output.mp4`

ffmpeg -stream_loop -1 -i archive/2291.mp3 -i archive/2291.mp4 -t 5.47 -c:v libx264 -threads 8 output.mp4

ffmpeg -stream_loop -1 -i archive/2291.mp3 -i archive/2291.mp4 -t 5.47 -c:v libvpx-vp9 output.webm

//

ffmpeg -stream_loop -1 -i archive/2291.mp4 -t 5.47 -c:v libvpx-vp9 -pass 1 -an -f null; `
ffmpeg -stream_loop -1 -i archive/2291.mp3 -i archive/2291.mp4 -t 5.47 -c:v libvpx-vp9 -pass 2 output.webm

//

ffmpeg -stream_loop -1 -i archive/2291.mp3 -i archive/2291.mp4 -t 5.47 -c:v libvpx-vp9 -lossless 1 output.webm

// constant quality
ffmpeg -stream_loop -1 -i "archive/2291.mp3" -i "archive/2291.mp4" -t 5.47 -c:v libvpx-vp9 -row-mt 1 -threads 8 -g 480 -b:v 0 -crf 31 -pass 1 -an -f null NUL
ffmpeg -stream_loop -1 -i "archive/2291.mp3" -i "archive/2291.mp4" -t 5.47 -c:v libvpx-vp9 -row-mt 1 -threads 8 -g 480 -b:v 0 -crf 31 -pass 2 output2.webm

// avg bitrate
ffmpeg -stream_loop -1 -i "archive/2291.mp3" -i "archive/2291.mp4" -t 5.47 -c:v libvpx-vp9 -row-mt 1 -threads 8 -b:v 2M -g 480 -pass 1 -an -f null NUL; `
ffmpeg -stream_loop -1 -i "archive/2291.mp3" -i "archive/2291.mp4" -t 5.47 -c:v libvpx-vp9 -row-mt 1 -threads 8 -b:v 2M -g 480 -pass 2 output3.webm

// hwaccel
ffmpeg -hwaccel cuvid -c:v vp9_cuvid -r 30000/1001 -i "input.webm" -r 120000/1001 -vf setpts=0.25\*PTS -c:v h264_nvenc -b:v 10M -an "output.mp4" -y

ffmpeg -stream_loop -1 -i archive/2291.mp3 -i archive/2291.mp4 -t 5.47 -c:v libvpx-vp9 output11.webm
