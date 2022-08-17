window.addEventListener("keydown", (e) => {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const keyName = document.querySelector(`div[data-key="${e.keyCode}"]`);
  audio.play();
  keyName.classList.add("active");
  setTimeout(() => {
    keyName.classList.remove("active");
  }, 150);
});
