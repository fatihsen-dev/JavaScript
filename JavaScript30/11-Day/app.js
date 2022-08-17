let video = document.querySelector(".player__video");
let musicToggleBtn = document.querySelector(".toggle");
let skipBtn = document.querySelectorAll("[data-skip]");
let playerSlider = document.querySelectorAll(".player__slider");
let progressFilled = document.querySelector(".progress__filled");
let progress = document.querySelector(".progress");
let musicTogglePlayPouse = document.querySelectorAll(".toggle i");

function videoPlayPause() {
  if (video.paused) {
    musicTogglePlayPouse[0].style.opacity = "0";
    musicTogglePlayPouse[1].style.opacity = "1";
    video.play();
  } else {
    musicTogglePlayPouse[0].style.opacity = "1";
    musicTogglePlayPouse[1].style.opacity = "0";
    video.pause();
  }
}

musicToggleBtn.onclick = () => {
  videoPlayPause();
};
video.onclick = () => {
  videoPlayPause();
};

skipBtn.forEach((e) => {
  e.onclick = () => {
    video.currentTime += parseFloat(e.dataset.skip);
  };
});

playerSlider.forEach((e) => {
  e.addEventListener("input", () => {
    video[e.name] = e.value;
  });
});
video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.transform = `translateX(${percent}%)`;
});

progress.onclick = (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
};