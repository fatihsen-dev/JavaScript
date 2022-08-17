let body = document.querySelector("body");
let themeBtn = document.querySelector("#themeBtn");

if (localStorage.getItem("DarkMode") == null) {
  localStorage.setItem("DarkMode", "false");
}

themeBtn.onclick = () => {
  if (localStorage.getItem("DarkMode") == "false") {
    localStorage.setItem("DarkMode", "true");
    body.classList.add("darkMode");
  } else if (localStorage.getItem("DarkMode") == "true") {
    localStorage.setItem("DarkMode", "false");
    body.classList.remove("darkMode");
  }
};

if (localStorage.getItem("DarkMode") == "false") {
  body.classList.remove("darkMode");
} else if (localStorage.getItem("DarkMode") == "true") {
  body.classList.add("darkMode");
}
