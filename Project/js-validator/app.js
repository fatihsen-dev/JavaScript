let succesText = '<i class="fa-solid fa-circle-check"></i>';
let errorText = '<i class="fa-solid fa-circle-exclamation"></i>';
const form = document.querySelector("#form");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userPassword = document.querySelector("#password");
let warningText = document.querySelectorAll(".warning-text");

userName.addEventListener("keyup", () => {});

form.addEventListener("submit", (e) => {
  let userNameMessage = [];
  let UserEmailMesaage = [];
  let userPasswordMessage = [];

  // user name alert
  if (userName.value === "" || userName.value == null) {
    userNameMessage.push("Kunlanıcı adı boş brakılamaz.");
  } else if (userName.value.length <= 6) {
    userNameMessage.push("Kunlanıcı adı en az 7 karakter olmalı.");
  } else if (userName.value.length >= 21) {
    userNameMessage.push("Kunlanıcı adı en fazla 20 karakter olmalı.");
  } else if (userName.value.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
    userNameMessage.push("Kunlanıcı adi özel karakter içerenez.");
  }

  // user email alert
  if (userEmail.value === "" || userName.value == null) {
    UserEmailMesaage.push("Email boş brakılamaz.");
  } else if (userEmail.value.length >= 255) {
    UserEmailMesaage.push("Email en fazla 254 karakter olabilir.");
  }

  // user password alert
  if (userPassword.value === "" || userName.value == null) {
    userPasswordMessage.push(" Şifre boş brakılamaz");
  } else if (userPassword.value.length <= 6) {
    userPasswordMessage.push("Şifre en az 6 karakter olmalı.");
  } else if (userPassword.value.length >= 21) {
    userPasswordMessage.push("Şifre en fazla 20 karakter olmalı.");
  }

  // ============================
  if (userNameMessage.length > 0) {
    e.preventDefault();
    warningText[0].innerHTML = errorText + userNameMessage.join(", ");
    warningText[0].style.color = "yellow";
  }
  if (UserEmailMesaage.length > 0) {
    e.preventDefault();
    warningText[1].innerHTML = errorText + UserEmailMesaage.join(", ");
    warningText[1].style.color = "yellow";
  }
  if (userPasswordMessage.length > 0) {
    e.preventDefault();
    warningText[2].innerHTML = errorText + userPasswordMessage.join(", ");
    warningText[2].style.color = "yellow";
  }
});

userName.addEventListener("keyup", () => {
  if (userName.value === "" || userName.value == null) {
    warningText[0].innerHTML = errorText + "Kunlanıcı adı boş brakılamaz.";
    warningText[0].style.color = "yellow";
  } else if (userName.value.length <= 6) {
    warningText[0].innerHTML =
      errorText + "Kunlanıcı adı en az 7 karakter olmalı.";
    warningText[0].style.color = "yellow";
  } else if (userName.value.length >= 21) {
    warningText[0].innerHTML =
      errorText + "Kunlanıcı adı en fazla 20 karakter olmalı.";
    warningText[0].style.color = "yellow";
  } else if (userName.value.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
    warningText[0].innerHTML =
      errorText + "Kunlanıcı adi özel karakter içerenez.";
    warningText[0].style.color = "yellow";
  } else if (userName.value.length > 6 || userName.value.length < 21) {
    warningText[0].innerHTML = succesText + "Bu kunlanıcı adı uygun görünüyor.";
    warningText[0].style.color = "green";
  }
});
userEmail.addEventListener("keyup", () => {
  if (userEmail.value === "" || userName.value == null) {
    warningText[1].innerHTML = errorText + "Email boş brakılamaz.";
    warningText[1].style.color = "yellow";
  } else if (userEmail.value.length >= 255) {
    warningText[1].innerHTML =
      errorText + "Email en fazla 254 karakter olabilir.";
    warningText[1].style.color = "yellow";
  } else if (userEmail.value.length >= 3) {
    if (userEmail.value.length < 255) {
      if (userEmail.value.includes("@") && userEmail.value.includes(".")) {
        warningText[1].innerHTML = succesText + "Email adresi denenebilir";
        warningText[1].style.color = "green";
      }
    }
  }
});
userPassword.addEventListener("keyup", () => {
  if (userPassword.value === "" || userName.value == null) {
    warningText[2].innerHTML = errorText + "Şifre boş brakılamaz";
    warningText[2].style.color = "yellow";
  } else if (userPassword.value.length <= 6) {
    warningText[2].innerHTML = errorText + "Şifre en az 6 karakter olmalı.";
    warningText[2].style.color = "yellow";
  } else if (userPassword.value.length >= 21) {
    warningText[2].innerHTML = errorText + "Şifre en fazla 20 karakter olmalı.";
    warningText[2].style.color = "yellow";
  } else {
    warningText[2].innerHTML = succesText + "Bu şifre uygun gibi görünüyor";
    warningText[2].style.color = "green";
  }
});
