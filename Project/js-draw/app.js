const canvas = document.querySelector("#draw");
const inputColor = document.querySelector("#inputColor");
const inputRange = document.querySelector("#inputRange");
const clearCanvas = document.querySelector("#clearCanvas");
const changeBg = document.querySelector("#changeBg");
const btnBlack = document.querySelector("#btnBlack");
const btnWhite = document.querySelector("#btnWhite");
const btnRed = document.querySelector("#btnRed");
const btnGreen = document.querySelector("#btnGreen");
const btnBlue = document.querySelector("#btnBlue");
const ctx = canvas.getContext("2d");
let bgdark = true;
function randomColor() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += Math.floor(Math.random() * 16).toString(16);
  }
  return hex;
}
inputColor.value = randomColor();

changeBg.addEventListener("click", () => {
  if (bgdark) {
    canvas.style.backgroundColor = "#000000";
    bgdark = false;
  } else {
    canvas.style.backgroundColor = "#ffffff";
    bgdark = true;
  }
});
clearCanvas.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.width = 800;
canvas.height = 500;
ctx.lineJoin = "round";
ctx.lineCap = "round";
let isDrawing = false;
let lastX;
let lastY;
let hue = 0;

btnBlack.onclick = () => {
  inputColor.value = "#000000";
  ctx.strokeStyle = inputColor.value;
};
btnWhite.onclick = () => {
  inputColor.value = "#ffffff";
  ctx.strokeStyle = inputColor.value;
};
btnRed.onclick = () => {
  inputColor.value = "#FF0000";
  ctx.strokeStyle = inputColor.value;
};
btnGreen.onclick = () => {
  inputColor.value = "#00FF00";
  ctx.strokeStyle = inputColor.value;
};
btnBlue.onclick = () => {
  inputColor.value = "#0000ff";
  ctx.strokeStyle = inputColor.value;
};

inputColor.addEventListener(
  "input",
  () => (ctx.strokeStyle = inputColor.value)
);
inputRange.addEventListener("input", () => {
  ctx.lineWidth == inputRange.value;
});

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.lineWidth = inputRange.value;
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});
canvas.addEventListener("mouseout", () => (isDrawing = false));
