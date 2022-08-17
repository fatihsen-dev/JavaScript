const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;
ctx.strokeStyle = "red";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 16;

let isDrawing = false;
let lastX;
let lastY;
let hue = 0;

function draw(e) {
  console.log("X:" + e.offsetX, "Y:" + e.offsetY);
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
