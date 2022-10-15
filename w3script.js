const myVideo = document.querySelector("video");

myVideo.onloadedmetadata = function () {
  half = this.duration / 2
  const stop = setInterval(() => {
    if (parseInt(half) == parseInt(this.currentTime)) {
      this.pause()
      clearInterval(stop)
    }
  }, 1000);
};