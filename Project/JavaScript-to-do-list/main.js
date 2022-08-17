let list = document.querySelector("#list");
let inputText = document.querySelector("#inputText");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  if (inputText.value == 0) {
  } else {
    list.innerHTML += `
      <li class="item" id="item">
        <span class="item-text"><p>${inputText.value}</p></span><button id="deleteItem">×</button>
      </li>
    `;

    inputText.value = null;
    let item = document.querySelectorAll("li");
    for (let i = 0; i < item.length; i++) {
      item[i].onclick = function () {
        item[i].classList.toggle("active");
      };
    }
    let deleteBtn = document.querySelectorAll("#deleteItem");
    for (let i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].onclick = function () {
        item[i].remove();
      };
    }
  }
});
