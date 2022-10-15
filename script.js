const video = document.querySelector("video");

// hide control panel
video.controls = false;

let value = true;
let a = true;

// video pause/stop in the middle
video.ontimeupdate = () => {
  if (parseInt(video.duration / 2) < video.currentTime && a) {
    video.pause();
    a = !a;
    value = !value;
  }
};

// reload after video ended
video.onended = () => {
  a = !a;
  value = !value;
};

// video play/pause while clicked
video.onclick = () => {
  value ? video.play() : video.pause();
  value = !value;
};
