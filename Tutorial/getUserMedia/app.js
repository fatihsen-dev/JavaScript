let player = document.querySelector("#player");
let canvas = document.querySelector("#canvas");
let blur = document.querySelector("#blur");
let grayscale = document.querySelector("#grayscale");
let contrast = document.querySelector("#contrast");
let brightness = document.querySelector("#brightness");
let saturate = document.querySelector("#saturate");
let sepia = document.querySelector("#sepia");
let invert = document.querySelector("#invert");
let shotBtn = document.querySelector("#shotBtn");
let snap = document.querySelector("#snap");
let imgCtnr = document.querySelector("#imgCtnr");

let ctx = canvas.getContext("2d");
function getVide() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      player.srcObject = localMediaStream;
      player.play();
      painToCanvas();
    })
    .catch((err) => {
      console.log(`OH NO: ${err}`);
    });
}
getVide();

function painToCanvas() {
  const width = player.width;
  const height = player.height;
  canvas.width = width;

  setInterval(() => {
    ctx.drawImage(player, 0, 0, width, height);
  }, 1000 / 60);
}

blur.addEventListener("input", () => {
  canvas.style.filter = `
  blur(${blur.value}px)
  grayscale(${grayscale.value}%)
  contrast(${contrast.value})
  brightness(${brightness.value})
  saturate(${saturate.value})
  sepia(${sepia.value}%)
  invert(${invert.value}%)
  `;
});
grayscale.addEventListener("input", () => {
  canvas.style.filter = `
  blur(${blur.value}px)
  grayscale(${grayscale.value}%)
  contrast(${contrast.value})
  brightness(${brightness.value})
  saturate(${saturate.value})
  sepia(${sepia.value}%)
  invert(${invert.value}%)
  `;
});
contrast.addEventListener("input", () => {
  canvas.style.filter = `
  blur(${blur.value}px)
  grayscale(${grayscale.value}%)
  contrast(${contrast.value})
  brightness(${brightness.value})
  saturate(${saturate.value})
  sepia(${sepia.value}%)
  invert(${invert.value}%)
  `;
});
brightness.addEventListener("input", () => {
  canvas.style.filter = `
  blur(${blur.value}px)
  grayscale(${grayscale.value}%)
  contrast(${contrast.value})
  brightness(${brightness.value})
  saturate(${saturate.value})
  sepia(${sepia.value}%)
  invert(${invert.value}%)
  `;
});
saturate.addEventListener("input", () => {
  canvas.style.filter = `
  blur(${blur.value}px)
  grayscale(${grayscale.value}%)
  contrast(${contrast.value})
  brightness(${brightness.value})
  saturate(${saturate.value})
  sepia(${sepia.value}%)
  invert(${invert.value}%)
  `;
});
sepia.addEventListener("input", () => {
  canvas.style.filter = `
  blur(${blur.value}px)
  grayscale(${grayscale.value}%)
  contrast(${contrast.value})
  brightness(${brightness.value})
  saturate(${saturate.value})
  sepia(${sepia.value}%)
  invert(${invert.value}%)
  `;
});
invert.addEventListener("input", () => {
  canvas.style.filter = `
  blur(${blur.value}px)
  grayscale(${grayscale.value}%)
  contrast(${contrast.value})
  brightness(${brightness.value})
  saturate(${saturate.value})
  sepia(${sepia.value}%)
  invert(${invert.value}%)
  `;
});
shotBtn.addEventListener("click", () => {
  // played sound
  snap.currentTime = 0;
  snap.play();

  //screenshot
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "photo");
  link.innerHTML = `<img src="${data}"></img>`;
  imgCtnr.insertBefore(link, imgCtnr.firstChild);
});
