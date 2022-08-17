let btn = document.querySelector("#btn");
let result = document.querySelector("#result");

let radio1 = document.querySelector("#radio1");
let radio2 = document.querySelector("#radio2");
let radio3 = document.querySelector("#radio3");
let radio4 = document.querySelector("#radio4");

let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");
let text3 = document.querySelector("#text3");
let text4 = document.querySelector("#text4");

result.innerHTML = "9 + 6 = ?";
text1.innerHTML = "16";
text2.innerHTML = "11";
text3.innerHTML = "24";
text4.innerHTML = "15";

let num = 0;

btn.addEventListener("click", () => {
  if (num == 0) {
    if (radio1.checked == true) {
      console.log("Başarısız");
    } else if (radio2.checked == true) {
      console.log("Başarısız");
    } else if (radio3.checked == true) {
      console.log("Başarısız");
    } else {
      num = num + 1;
      result.innerHTML = "28 + 3 = ?";
      text1.innerHTML = "21";
      text2.innerHTML = "9";
      text3.innerHTML = "31";
      text4.innerHTML = "13";

      radio1.checked = false;
      radio2.checked = false;
      radio3.checked = false;
      radio4.checked = false;
    }
  } else if (num == 1) {
    if (radio1.checked == true) {
      console.log("Başarısız");
    } else if (radio2.checked == true) {
      console.log("Başarısız");
    } else if (radio3.checked == true) {
      num = num + 1;
      result.innerHTML = "98 + 125 = ?";
      text1.innerHTML = "223";
      text2.innerHTML = "113";
      text3.innerHTML = "84";
      text4.innerHTML = "320";

      radio1.checked = false;
      radio2.checked = false;
      radio3.checked = false;
      radio4.checked = false;
    } else {
      console.log("Başarısız");
    }
  } else if (num == 2) {
    if (radio1.checked == true) {
      num = num + 1;
      result.innerHTML = "185 + 91 = ?";
      text1.innerHTML = "132";
      text2.innerHTML = "276";
      text3.innerHTML = "420";
      text4.innerHTML = "76";

      radio1.checked = false;
      radio2.checked = false;
      radio3.checked = false;
      radio4.checked = false;
    } else if (radio2.checked == true) {
      console.log("Başarısız");
    } else if (radio3.checked == true) {
      console.log("Başarısız");
    } else {
      console.log("Başarısız");
    }
  } else if (num == 3) {
    if (radio1.checked == true) {
      console.log("Başarısız");
    } else if (radio2.checked == true) {
      num = num + 1;
      result.innerHTML = "Finish :)";
      text1.innerHTML = "A";
      text2.innerHTML = "B";
      text3.innerHTML = "C";
      text4.innerHTML = "D";

      radio1.checked = false;
      radio2.checked = false;
      radio3.checked = false;
      radio4.checked = false;

      radio1.disabled = true;
      radio2.disabled = true;
      radio3.disabled = true;
      radio4.disabled = true;
    } else if (radio3.checked == true) {
      console.log("Başarısız");
    } else {
      console.log("Başarısız");
    }
  }
});
