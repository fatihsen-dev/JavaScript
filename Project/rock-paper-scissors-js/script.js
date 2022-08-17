let computerItem = document.querySelectorAll(".computer > .item");
let playerItem = document.querySelectorAll(".player > .item");
let computerScoreNumber = document.querySelector(".computer-score h2");
let playerScoreNumber = document.querySelector(".player-score h2");
let drawScoreNumber = document.querySelector(".draw-score h2");

let comScore = 0;
let playerScore = 0;
let drawScore = 0;

let myinterval1 = setInterval(() => {
  computerItem.forEach((item) => {
    item.classList.remove("active");
  });
}, 300);
let myinterval2 = setInterval(() => {
  computerItem.forEach((item) => {
    item.classList.remove("active");
  });
}, 300);

playerItem[0].addEventListener("click", () => {
  let randomComputer = computerItem[Math.floor(Math.random() * 3)].classList[1];

  if (randomComputer == "computer-item-2") {
    playerScore = playerScore + 1;
    playerScoreNumber.textContent = playerScore;

    computerItem[1].classList.add("active");
    myinterval1;
    clearInterval(myinterval1)
    myinterval2;
  } 
  else if (randomComputer == "computer-item-3") {
    comScore = comScore + 1;
    computerScoreNumber.textContent = comScore;

    computerItem[2].classList.add("active");
    myinterval1;
    clearInterval(myinterval1);
    myinterval2;
  } 
  else {
    drawScore = drawScore + 1;
    drawScoreNumber.textContent = drawScore;
    
    computerItem[0].classList.add("active");
    myinterval1;
    clearInterval(myinterval1);
    myinterval2;
  }
});

playerItem[1].addEventListener("click", () => {
  let randomComputer = computerItem[Math.floor(Math.random() * 3)].classList[1];

  if (randomComputer == "computer-item-3") {
    playerScore = playerScore + 1;
    playerScoreNumber.textContent = playerScore;

    computerItem[2].classList.add("active");
    myinterval1;
    clearInterval(myinterval1);
    myinterval2;
  } 
  else if (randomComputer == "computer-item-1") {
    comScore = comScore + 1;
    computerScoreNumber.textContent = comScore;

    computerItem[0].classList.add("active");
    myinterval1;
    clearInterval(myinterval1);
    myinterval2;
  } 
  else {
    drawScore = drawScore + 1;
    drawScoreNumber.textContent = drawScore;
    
    computerItem[1].classList.add("active");
    myinterval1;
    clearInterval(myinterval1);
    myinterval2;
  }
});

playerItem[2].addEventListener("click", () => {
  let randomComputer = computerItem[Math.floor(Math.random() * 3)].classList[1];

  if (randomComputer == "computer-item-1") {
    playerScore = playerScore + 1;
    playerScoreNumber.textContent = playerScore;

    computerItem[0].classList.add("active");
    myinterval1;
    clearInterval(myinterval1);
    myinterval2;
  } 
  else if (randomComputer == "computer-item-2") {
    comScore = comScore + 1;
    computerScoreNumber.textContent = comScore;

    computerItem[1].classList.add("active");
    myinterval1;
    clearInterval(myinterval1);
    myinterval2;
  } 
  else {
    drawScore = drawScore + 1;
    drawScoreNumber.textContent = drawScore;

    computerItem[2].classList.add("active");
    myinterval1;
    clearInterval(myinterval1);
    myinterval2;
  }
});
