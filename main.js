const speed = document.querySelector(".speed");
const speedCount = speed.querySelector(".speed-count");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".video");



function handleMove(e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.5;
    const max = 5;
    const playbackRate = percent * (max - min) + min;
    bar.style.height = percent * 100 + "%";
    video.playbackRate = playbackRate;
    speedCount.textContent = playbackRate.toFixed(1) + "x";
  };

speed.addEventListener("mousemove", handleMove);
