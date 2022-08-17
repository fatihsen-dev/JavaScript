let back = document.querySelector("#back");
let next = document.querySelector("#next");

let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let img4 = document.querySelector("#img4");

let num = 1;

back.addEventListener("click", () => {
  if (num <= 1) {
    num = 1;
    // test
  } else if (num <= 4) {
    num = num - 1;
  }

  if (num == 1){
    img1.classList.add("active");
    img2.classList.remove("active");
    img3.classList.remove("active");
    img4.classList.remove("active");
  }
  else if(num == 2){
    img1.classList.remove("active");
    img2.classList.add("active");
    img3.classList.remove("active");
    img4.classList.remove("active");
  }
  else if(num == 3){
    img1.classList.remove("active");
    img2.classList.remove("active");
    img3.classList.add("active");
    img4.classList.remove("active");
  }
  else {
    img1.classList.remove("active");
    img2.classList.remove("active");
    img3.classList.remove("active");
    img4.classList.add("active");
  }
});
next.addEventListener("click", () => {
  if (num == 4) {
    // test
  } else if (num >= 1) {
    num = num + 1;
  }

  if (num == 1) {
    img1.classList.add("active");
    img2.classList.remove("active");
    img3.classList.remove("active");
    img4.classList.remove("active");
  } else if (num == 2) {
    img1.classList.remove("active");
    img2.classList.add("active");
    img3.classList.remove("active");
    img4.classList.remove("active");
  } else if (num == 3) {
    img1.classList.remove("active");
    img2.classList.remove("active");
    img3.classList.add("active");
    img4.classList.remove("active");
  } else {
    img1.classList.remove("active");
    img2.classList.remove("active");
    img3.classList.remove("active");
    img4.classList.add("active");
  }
});
