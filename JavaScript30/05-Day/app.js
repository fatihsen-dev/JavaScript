let panel = document.querySelectorAll(".panel");

panel.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
  });
});
