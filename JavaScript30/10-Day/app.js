let checkBox = document.querySelectorAll(".cBox");

let lastChecked;

function handleCheck(e) {
  let isBetween = false;
  if (e.shiftKey && this.checked) {
    checkBox.forEach((checkBox) => {
      if (checkBox === this || checkBox === lastChecked) {
        isBetween = !isBetween;
      }
      if (isBetween) {
        checkBox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkBox.forEach((cBox) => cBox.addEventListener("click", handleCheck));
