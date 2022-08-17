let num = document.querySelectorAll(".num");
let oprtbtn = document.querySelectorAll(".oprtbtn");
let display = document.querySelector("#display");
let clear = document.querySelector(".clear");
let optState = false;
let opt = "";
let final = 0;

num.forEach((num) => {
  num.onclick = () => {
    if (display.value == "0" || optState) {
      display.value = "";
    }
    display.value += Number(num.textContent);
    optState = false;
  };
});

clear.onclick = () => {
  display.value = "";
};

oprtbtn.forEach((num) => {
  num.onclick = () => {
    optState = true;
    let newOpt = num.textContent;
    switch (opt) {
      case "+":
        display.value = final + Number(display.value);
        break;
      case "-":
        display.value = final - Number(display.value);
        break;
      case "*":
        display.value = final * Number(display.value);
        break;
      case "/":
        display.value = final / Number(display.value);
        break;
      case "=":
        final = Number(display.value);
        break;
    }

    final = Number(display.value);
    opt = newOpt;
  };
});
