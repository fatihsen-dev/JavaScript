const jsConfetti = new JSConfetti();
console.log("Enter the letters: w,e,s,b,o,s");
let winText = document.querySelector("#winText");
const hazine = [];
const code = "wesbos";
window.addEventListener("keyup", (e) => {
  hazine.push(e.key);
  console.log(hazine);
  if (hazine.join("") == code) {
    winText.innerHTML = "Win";
    jsConfetti.addConfetti({
      emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸"],
      emojiSize: 30,
      confettiRadius: 6,
      confettiNumber: 400,
    });
    hazine.shift();
  } else if (hazine.length >= 6) {
    hazine.shift();
    winText.innerHTML = "";
  }
});
