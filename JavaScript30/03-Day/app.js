const inputs = document.querySelectorAll(".item input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((inp) => {
  inp.addEventListener("input", handleUpdate);
});
