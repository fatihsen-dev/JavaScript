let sec = document.querySelector("#sec");
let min = document.querySelector("#min");
let hr = document.querySelector("#hr");
let digital = document.querySelector("#digital");

function test() {
  let clock = new Date();
  const secTime = (clock.getSeconds() / 60) * 360;
  const minTime = (clock.getMinutes() / 60) * 360;
  const hrTime = (clock.getHours() / 12) * 360;
  sec.style.transform = `rotate(${secTime}deg)`;
  min.style.transform = `rotate(${minTime}deg)`;
  hr.style.transform = `rotate(${hrTime}deg)`;
}

setInterval(test, 1000);
