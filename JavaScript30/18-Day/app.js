const timeNodes = [...document.querySelectorAll("[data-time]")];
const span = [...document.querySelectorAll("ul li span")];

let seconds = timeNodes
  .map((node, i) => {
    span[i].innerHTML += `<small>${node.dataset.time}</small>`;
    return node.dataset.time;
  })
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);
