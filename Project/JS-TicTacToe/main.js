const playerText = document.querySelector("#playerText");
const itemText = document.querySelectorAll("#item");
const win = document.querySelector("#win");
const xwin = document.querySelector("#win > .xwin");
const owin = document.querySelector("#win > .owin");
let player = "o";
playerText.innerHTML = player;
itemText.forEach((i) => {
  i.addEventListener("click", () => {
    if (player == "o" && i.innerHTML == "") {
      i.innerHTML = player;
      player = "x";
      playerText.innerHTML = player;
      control();
    } else if (player == "x" && i.innerHTML == "") {
      i.innerHTML = player;
      player = "o";
      playerText.innerHTML = player;
      control();
    }
    function control() {
      columnsO();
      rowsO();
      xControlO();
      columnsX();
      rowsX();
      xControlX();
    }
  });
});

function columnsO() {
  if (
    itemText[0].innerHTML == "o" &&
    itemText[1].innerHTML == "o" &&
    itemText[2].innerHTML == "o"
  ) {
    winO();
  } else if (
    itemText[3].innerHTML == "o" &&
    itemText[4].innerHTML == "o" &&
    itemText[5].innerHTML == "o"
  ) {
    winO();
  } else if (
    itemText[6].innerHTML == "o" &&
    itemText[7].innerHTML == "o" &&
    itemText[8].innerHTML == "o"
  ) {
    winO();
  }
}
function rowsO() {
  if (
    itemText[0].innerHTML == "o" &&
    itemText[3].innerHTML == "o" &&
    itemText[6].innerHTML == "o"
  ) {
    winO();
  } else if (
    itemText[1].innerHTML == "o" &&
    itemText[4].innerHTML == "o" &&
    itemText[7].innerHTML == "o"
  ) {
    winO();
  } else if (
    itemText[2].innerHTML == "o" &&
    itemText[5].innerHTML == "o" &&
    itemText[8].innerHTML == "o"
  ) {
    winO();
  }
}
function xControlO() {
  if (
    itemText[0].innerHTML == "o" &&
    itemText[4].innerHTML == "o" &&
    itemText[8].innerHTML == "o"
  ) {
    winO();
  } else if (
    itemText[2].innerHTML == "o" &&
    itemText[4].innerHTML == "o" &&
    itemText[6].innerHTML == "o"
  ) {
    winO();
  }
}

function columnsX() {
  if (
    itemText[0].innerHTML == "x" &&
    itemText[1].innerHTML == "x" &&
    itemText[2].innerHTML == "x"
  ) {
    winX();
  } else if (
    itemText[3].innerHTML == "x" &&
    itemText[4].innerHTML == "x" &&
    itemText[5].innerHTML == "x"
  ) {
    winX();
  } else if (
    itemText[6].innerHTML == "x" &&
    itemText[7].innerHTML == "x" &&
    itemText[8].innerHTML == "x"
  ) {
    winX();
  }
}
function rowsX() {
  if (
    itemText[0].innerHTML == "x" &&
    itemText[3].innerHTML == "x" &&
    itemText[6].innerHTML == "x"
  ) {
    winX();
  } else if (
    itemText[1].innerHTML == "x" &&
    itemText[4].innerHTML == "x" &&
    itemText[7].innerHTML == "x"
  ) {
    winX();
  } else if (
    itemText[2].innerHTML == "x" &&
    itemText[5].innerHTML == "x" &&
    itemText[8].innerHTML == "x"
  ) {
    winX();
  }
}
function xControlX() {
  if (
    itemText[0].innerHTML == "x" &&
    itemText[4].innerHTML == "x" &&
    itemText[8].innerHTML == "x"
  ) {
    winX();
  } else if (
    itemText[2].innerHTML == "x" &&
    itemText[4].innerHTML == "x" &&
    itemText[6].innerHTML == "x"
  ) {
    winX();
  }
}

function winO() {
  for (let i = 0; i < itemText.length; i++) {
    itemText[i].style.pointerEvents = "none";
  }
  win.classList.add("active")
  owin.classList.add("active")
}
function winX() {
  for (let i = 0; i < itemText.length; i++) {
    itemText[i].style.pointerEvents = "none";
  }
  win.classList.add("active");
  xwin.classList.add("active");
}
