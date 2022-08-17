let letters = ["TAKTIK", "PIJAMA", "ATMACA", "GORMEK", "CAYLAK", "VARLIK"];
let score = document.querySelector("#score");
let letter = document.querySelectorAll(".l");
let uzuv = document.querySelectorAll(".uzuv");
let testBtn = document.querySelector("#testBtn");
let inputText = document.querySelector("#inputText");
let olmeNedeni = document.querySelector("#olmeNedeni");
let lettersCount = 0;
let scoreCount = 0;

testBtn.onclick = () => {
  if (inputText.value.length == 1 && lettersCount == 0) {
    if (
      letters[0][0] == inputText.value.toLocaleUpperCase() &&
      letter[0].innerHTML == ""
    ) {
      letter[0].innerHTML = letters[0][0];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[0].classList.add("active");
    } else if (
      letters[0][1] == inputText.value.toLocaleUpperCase() &&
      letter[1].innerHTML == ""
    ) {
      letter[1].innerHTML = letters[0][1];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[1].classList.add("active");
    } else if (
      letters[0][2] == inputText.value.toLocaleUpperCase() &&
      letter[2].innerHTML == ""
    ) {
      letter[2].innerHTML = letters[0][2];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[2].classList.add("active");
    } else if (
      letters[0][3] == inputText.value.toLocaleUpperCase() &&
      letter[3].innerHTML == ""
    ) {
      letter[3].innerHTML = letters[0][3];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[3].classList.add("active");
    } else if (
      letters[0][4] == inputText.value.toLocaleUpperCase() &&
      letter[4].innerHTML == ""
    ) {
      letter[4].innerHTML = letters[0][4];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[4].classList.add("active");
    } else if (
      letters[0][5] == inputText.value.toLocaleUpperCase() &&
      letter[5].innerHTML == ""
    ) {
      letter[5].innerHTML = letters[0][5];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[5].classList.add("active");
    }
    for (let i = 0; i < letter.length; i++) {
      if (
        letter[0].innerHTML == letters[0][0] &&
        letter[1].innerHTML == letters[0][1] &&
        letter[2].innerHTML == letters[0][2] &&
        letter[3].innerHTML == letters[0][3] &&
        letter[4].innerHTML == letters[0][4] &&
        letter[5].innerHTML == letters[0][5]
      ) {
        lettersCount = 1;
        console.log(lettersCount);
        letter[0].innerHTML = "";
        letter[1].innerHTML = "";
        letter[2].innerHTML = "";
        letter[3].innerHTML = "";
        letter[4].innerHTML = "";
        letter[5].innerHTML = "";
        let nasilOldu = [
          "Biçaklanarak",
          "Silah ile",
          "Asılarak",
          "Boğularak",
          "Uçurumdan düşerek",
          "Fırlatılarak",
        ];
        let randomOlum = Math.floor(Math.random() * 6);
        olmeNedeni.innerHTML = nasilOldu[randomOlum];
        uzuv[0].classList.remove("active");
        uzuv[1].classList.remove("active");
        uzuv[2].classList.remove("active");
        uzuv[3].classList.remove("active");
        uzuv[4].classList.remove("active");
        uzuv[5].classList.remove("active");
      }
    }
  } else if (inputText.value.length == 1 && lettersCount == 1) {
    if (
      letters[1][0] == inputText.value.toLocaleUpperCase() &&
      letter[0].innerHTML == ""
    ) {
      letter[0].innerHTML = letters[1][0];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[0].classList.add("active");
    } else if (
      letters[1][1] == inputText.value.toLocaleUpperCase() &&
      letter[1].innerHTML == ""
    ) {
      letter[1].innerHTML = letters[1][1];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[1].classList.add("active");
    } else if (
      letters[1][2] == inputText.value.toLocaleUpperCase() &&
      letter[2].innerHTML == ""
    ) {
      letter[2].innerHTML = letters[1][2];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[2].classList.add("active");
    } else if (
      letters[1][3] == inputText.value.toLocaleUpperCase() &&
      letter[3].innerHTML == ""
    ) {
      letter[3].innerHTML = letters[1][3];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[3].classList.add("active");
    } else if (
      letters[1][4] == inputText.value.toLocaleUpperCase() &&
      letter[4].innerHTML == ""
    ) {
      letter[4].innerHTML = letters[1][4];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[4].classList.add("active");
    } else if (
      letters[1][5] == inputText.value.toLocaleUpperCase() &&
      letter[5].innerHTML == ""
    ) {
      letter[5].innerHTML = letters[1][5];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[5].classList.add("active");
    }
    for (let i = 0; i < letter.length; i++) {
      if (
        letter[0].innerHTML == letters[1][0] &&
        letter[1].innerHTML == letters[1][1] &&
        letter[2].innerHTML == letters[1][2] &&
        letter[3].innerHTML == letters[1][3] &&
        letter[4].innerHTML == letters[1][4] &&
        letter[5].innerHTML == letters[1][5]
      ) {
        lettersCount += 1;
        console.log(lettersCount);
        letter[0].innerHTML = "";
        letter[1].innerHTML = "";
        letter[2].innerHTML = "";
        letter[3].innerHTML = "";
        letter[4].innerHTML = "";
        letter[5].innerHTML = "";
        let nasilOldu = [
          "Biçaklanarak",
          "Silah ile",
          "Asılarak",
          "Boğularak",
          "Uçurumdan düşerek",
          "Fırlatılarak",
        ];
        let randomOlum = Math.floor(Math.random() * 6);
        olmeNedeni.innerHTML = nasilOldu[randomOlum];
        uzuv[0].classList.remove("active");
        uzuv[1].classList.remove("active");
        uzuv[2].classList.remove("active");
        uzuv[3].classList.remove("active");
        uzuv[4].classList.remove("active");
        uzuv[5].classList.remove("active");
      }
    }
  } else if (inputText.value.length == 1 && lettersCount == 2) {
    if (
      letters[2][0] == inputText.value.toLocaleUpperCase() &&
      letter[0].innerHTML == ""
    ) {
      letter[0].innerHTML = letters[2][0];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[0].classList.add("active");
    } else if (
      letters[2][1] == inputText.value.toLocaleUpperCase() &&
      letter[1].innerHTML == ""
    ) {
      letter[1].innerHTML = letters[2][1];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[1].classList.add("active");
    } else if (
      letters[2][2] == inputText.value.toLocaleUpperCase() &&
      letter[2].innerHTML == ""
    ) {
      letter[2].innerHTML = letters[2][2];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[2].classList.add("active");
    } else if (
      letters[2][3] == inputText.value.toLocaleUpperCase() &&
      letter[3].innerHTML == ""
    ) {
      letter[3].innerHTML = letters[2][3];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[3].classList.add("active");
    } else if (
      letters[2][4] == inputText.value.toLocaleUpperCase() &&
      letter[4].innerHTML == ""
    ) {
      letter[4].innerHTML = letters[2][4];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[4].classList.add("active");
    } else if (
      letters[2][5] == inputText.value.toLocaleUpperCase() &&
      letter[5].innerHTML == ""
    ) {
      letter[5].innerHTML = letters[2][5];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[5].classList.add("active");
    }
    for (let i = 0; i < letter.length; i++) {
      if (
        letter[0].innerHTML == letters[2][0] &&
        letter[1].innerHTML == letters[2][1] &&
        letter[2].innerHTML == letters[2][2] &&
        letter[3].innerHTML == letters[2][3] &&
        letter[4].innerHTML == letters[2][4] &&
        letter[5].innerHTML == letters[2][5]
      ) {
        lettersCount += 1;
        console.log(lettersCount);
        letter[0].innerHTML = "";
        letter[1].innerHTML = "";
        letter[2].innerHTML = "";
        letter[3].innerHTML = "";
        letter[4].innerHTML = "";
        letter[5].innerHTML = "";
        let nasilOldu = [
          "Biçaklanarak",
          "Silah ile",
          "Asılarak",
          "Boğularak",
          "Uçurumdan düşerek",
          "Fırlatılarak",
        ];
        let randomOlum = Math.floor(Math.random() * 6);
        olmeNedeni.innerHTML = nasilOldu[randomOlum];
        uzuv[0].classList.remove("active");
        uzuv[1].classList.remove("active");
        uzuv[2].classList.remove("active");
        uzuv[3].classList.remove("active");
        uzuv[4].classList.remove("active");
        uzuv[5].classList.remove("active");
      }
    }
  } else if (inputText.value.length == 1 && lettersCount == 3) {
    if (
      letters[3][0] == inputText.value.toLocaleUpperCase() &&
      letter[0].innerHTML == ""
    ) {
      letter[0].innerHTML = letters[3][0];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[0].classList.add("active");
    } else if (
      letters[3][1] == inputText.value.toLocaleUpperCase() &&
      letter[1].innerHTML == ""
    ) {
      letter[1].innerHTML = letters[3][1];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[1].classList.add("active");
    } else if (
      letters[3][2] == inputText.value.toLocaleUpperCase() &&
      letter[2].innerHTML == ""
    ) {
      letter[2].innerHTML = letters[3][2];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[2].classList.add("active");
    } else if (
      letters[3][3] == inputText.value.toLocaleUpperCase() &&
      letter[3].innerHTML == ""
    ) {
      letter[3].innerHTML = letters[3][3];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[3].classList.add("active");
    } else if (
      letters[3][4] == inputText.value.toLocaleUpperCase() &&
      letter[4].innerHTML == ""
    ) {
      letter[4].innerHTML = letters[3][4];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[4].classList.add("active");
    } else if (
      letters[3][5] == inputText.value.toLocaleUpperCase() &&
      letter[5].innerHTML == ""
    ) {
      letter[5].innerHTML = letters[3][5];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[5].classList.add("active");
    }
    for (let i = 0; i < letter.length; i++) {
      if (
        letter[0].innerHTML == letters[3][0] &&
        letter[1].innerHTML == letters[3][1] &&
        letter[2].innerHTML == letters[3][2] &&
        letter[3].innerHTML == letters[3][3] &&
        letter[4].innerHTML == letters[3][4] &&
        letter[5].innerHTML == letters[3][5]
      ) {
        lettersCount += 1;
        console.log(lettersCount);
        letter[0].innerHTML = "";
        letter[1].innerHTML = "";
        letter[2].innerHTML = "";
        letter[3].innerHTML = "";
        letter[4].innerHTML = "";
        letter[5].innerHTML = "";
        let nasilOldu = [
          "Biçaklanarak",
          "Silah ile",
          "Asılarak",
          "Boğularak",
          "Uçurumdan düşerek",
          "Fırlatılarak",
        ];
        let randomOlum = Math.floor(Math.random() * 6);
        olmeNedeni.innerHTML = nasilOldu[randomOlum];
        uzuv[0].classList.remove("active");
        uzuv[1].classList.remove("active");
        uzuv[2].classList.remove("active");
        uzuv[3].classList.remove("active");
        uzuv[4].classList.remove("active");
        uzuv[5].classList.remove("active");
      }
    }
  } else if (inputText.value.length == 1 && lettersCount == 4) {
    if (
      letters[4][0] == inputText.value.toLocaleUpperCase() &&
      letter[0].innerHTML == ""
    ) {
      letter[0].innerHTML = letters[4][0];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[0].classList.add("active");
    } else if (
      letters[4][1] == inputText.value.toLocaleUpperCase() &&
      letter[1].innerHTML == ""
    ) {
      letter[1].innerHTML = letters[4][1];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[1].classList.add("active");
    } else if (
      letters[4][2] == inputText.value.toLocaleUpperCase() &&
      letter[2].innerHTML == ""
    ) {
      letter[2].innerHTML = letters[4][2];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[2].classList.add("active");
    } else if (
      letters[4][3] == inputText.value.toLocaleUpperCase() &&
      letter[3].innerHTML == ""
    ) {
      letter[3].innerHTML = letters[4][3];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[3].classList.add("active");
    } else if (
      letters[4][4] == inputText.value.toLocaleUpperCase() &&
      letter[4].innerHTML == ""
    ) {
      letter[4].innerHTML = letters[4][4];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[4].classList.add("active");
    } else if (
      letters[4][5] == inputText.value.toLocaleUpperCase() &&
      letter[5].innerHTML == ""
    ) {
      letter[5].innerHTML = letters[4][5];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[5].classList.add("active");
    }
    for (let i = 0; i < letter.length; i++) {
      if (
        letter[0].innerHTML == letters[4][0] &&
        letter[1].innerHTML == letters[4][1] &&
        letter[2].innerHTML == letters[4][2] &&
        letter[3].innerHTML == letters[4][3] &&
        letter[4].innerHTML == letters[4][4] &&
        letter[5].innerHTML == letters[4][5]
      ) {
        lettersCount += 1;
        console.log(lettersCount);
        letter[0].innerHTML = "";
        letter[1].innerHTML = "";
        letter[2].innerHTML = "";
        letter[3].innerHTML = "";
        letter[4].innerHTML = "";
        letter[5].innerHTML = "";
        let nasilOldu = [
          "Biçaklanarak",
          "Silah ile",
          "Asılarak",
          "Boğularak",
          "Uçurumdan düşerek",
          "Fırlatılarak",
        ];
        let randomOlum = Math.floor(Math.random() * 6);
        olmeNedeni.innerHTML = nasilOldu[randomOlum];
        uzuv[0].classList.remove("active");
        uzuv[1].classList.remove("active");
        uzuv[2].classList.remove("active");
        uzuv[3].classList.remove("active");
        uzuv[4].classList.remove("active");
        uzuv[5].classList.remove("active");
      }
    }
  } else if (inputText.value.length == 1 && lettersCount == 5) {
    if (
      letters[5][0] == inputText.value.toLocaleUpperCase() &&
      letter[0].innerHTML == ""
    ) {
      letter[0].innerHTML = letters[5][0];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[0].classList.add("active");
    } else if (
      letters[5][1] == inputText.value.toLocaleUpperCase() &&
      letter[1].innerHTML == ""
    ) {
      letter[1].innerHTML = letters[5][1];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[1].classList.add("active");
    } else if (
      letters[5][2] == inputText.value.toLocaleUpperCase() &&
      letter[2].innerHTML == ""
    ) {
      letter[2].innerHTML = letters[5][2];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[2].classList.add("active");
    } else if (
      letters[5][3] == inputText.value.toLocaleUpperCase() &&
      letter[3].innerHTML == ""
    ) {
      letter[3].innerHTML = letters[5][3];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[3].classList.add("active");
    } else if (
      letters[5][4] == inputText.value.toLocaleUpperCase() &&
      letter[4].innerHTML == ""
    ) {
      letter[4].innerHTML = letters[5][4];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[4].classList.add("active");
    } else if (
      letters[5][5] == inputText.value.toLocaleUpperCase() &&
      letter[5].innerHTML == ""
    ) {
      letter[5].innerHTML = letters[5][5];
      scoreCount += 10;
      score.innerHTML = scoreCount;
      inputText.value = "";
      uzuv[5].classList.add("active");
    }
    for (let i = 0; i < letter.length; i++) {
      if (
        letter[0].innerHTML == letters[5][0] &&
        letter[1].innerHTML == letters[5][1] &&
        letter[2].innerHTML == letters[5][2] &&
        letter[3].innerHTML == letters[5][3] &&
        letter[4].innerHTML == letters[5][4] &&
        letter[5].innerHTML == letters[5][5]
      ) {
        lettersCount += 1;
        console.log(lettersCount);
        letter[0].innerHTML = "";
        letter[1].innerHTML = "";
        letter[2].innerHTML = "";
        letter[3].innerHTML = "";
        letter[4].innerHTML = "";
        letter[5].innerHTML = "";
        let nasilOldu = [
          "Biçaklanarak",
          "Silah ile",
          "Asılarak",
          "Boğularak",
          "Uçurumdan düşerek",
          "Fırlatılarak",
        ];
        let randomOlum = Math.floor(Math.random() * 6);
        olmeNedeni.innerHTML = nasilOldu[randomOlum];
        uzuv[0].classList.remove("active");
        uzuv[1].classList.remove("active");
        uzuv[2].classList.remove("active");
        uzuv[3].classList.remove("active");
        uzuv[4].classList.remove("active");
        uzuv[5].classList.remove("active");
      }
    }
  } else if (lettersCount == 6) {
    letter[0].innerHTML = "F";
    letter[1].innerHTML = "İ";
    letter[2].innerHTML = "N";
    letter[3].innerHTML = "İ";
    letter[4].innerHTML = "S";
    letter[5].innerHTML = "H";
  }
};
