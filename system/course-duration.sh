# TODO: develop a way to get each video and its duration
# and a way to foramt the output, like HH:MM:SS for each video duration
# change the output from seconds to "XX hours"
for i in *.mp4; do
    dur=$(ffmpeg -i "$i" 2>&1 | grep -oP "(?<=Duration: ).*(?=, start.*)");
date -ud "1970/01/01 $dur" +%s; done | paste -s -d+ | bc
echo "$dur"
