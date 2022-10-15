const video = document.querySelector("video");

// hide control panel
video.controls = false;
let value = true;
const middle = video.duration / 2;
let a = true;

// video pause/stop in the middle
video.ontimeupdate = () => {
  if (middle < video.currentTime && a) {
    video.pause();
    a = !a;
    console.log(a);
    value = !value;
  }
};

// reload
video.onended = () => {
  a = !a;
  value = !value;
};

// video play/pause while clicked
video.onclick = () => {
  console.log(value);
  value ? video.play() : video.pause();
  value = !value;
};

// const video = document.querySelector("video");
// video.controls = false;
// let value = true;
// video.onloadedmetadata = function () {
//   half = this.duration / 2;
//   const stop = setInterval(() => {
//     if (parseInt(half) == parseInt(this.currentTime)) {
//       this.pause();
//       clearInterval(stop);
//       value = !value
//     }
//   }, 1000);
// };
