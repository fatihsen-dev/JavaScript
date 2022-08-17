let form = document.querySelector("#form");
let list = document.querySelector(".list");
let itemsParse;
let checkedControl;
form.children[0].focus();
let items = [
  {
    name: "Döner",
    checked: false,
  },
  {
    name: "Kumru",
    checked: true,
  },
  {
    name: "Sosisli",
    checked: false,
  },
  {
    name: "Hamburger",
    checked: true,
  },
  {
    name: "Lahmacun",
    checked: false,
  },
  {
    name: "Mantı",
    checked: true,
  },
];

function html(item, i) {
  let html = `
  <input  onchange="checkedtest(${i})" class="checkbox" type="checkbox" ${checkedControl} id="item${i}" />
  <label class="label" for="item${i}">${item.name}</label>
  <button class="icon"  onclick="deleteItem(${i})">
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
               height="24"
               >
               <path fill="none" d="M0 0h24v24H0z" />
               <path
               d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
               />
               </svg>
               </button>
               `;
  let li = document.createElement("li");
  li.innerHTML = html;
  list.appendChild(li);
}
function listed() {
  itemsParse = JSON.parse(localStorage.getItem("data"));
  itemsParse.forEach((element, i) => {
    if (element.checked == true) {
      checkedControl = "checked";
    } else {
      checkedControl = "";
    }
    html(element, i);
  });
}
let data;
if (localStorage.getItem("data") == null) {
  localStorage.setItem("data", JSON.stringify(items));
  listed();
} else {
  itemsParse = JSON.parse(localStorage.getItem("data"));
  listed();
}
form.addEventListener("click", (e) => {
  e.preventDefault();
});
form.children[1].addEventListener("click", () => {
  if (form.children[0].value !== "" && form.children[0].value.length <= 25) {
    list.innerHTML = "";
    itemsParse.push({ name: form.children[0].value, checked: false });
    localStorage.setItem("data", JSON.stringify(itemsParse));
    listed();
    form.children[0].value = "";
    form.children[0].focus();
  }
});
function deleteItem(i) {
  itemsParse.splice(i, 1);
  localStorage.setItem("data", JSON.stringify(itemsParse));
  list.innerHTML = "";
  listed();
}
function checkedtest(index) {
  let checkbox = document.querySelectorAll(".checkbox");
  itemsParse[index].checked = checkbox[index].checked;
  localStorage.setItem("data", JSON.stringify(itemsParse));
}
let clearAll = document.querySelector("#clearAll");
clearAll.addEventListener("click", () => {
  itemsParse.splice(0, itemsParse.length);
  localStorage.setItem("data", JSON.stringify(itemsParse));
  list.innerHTML = "";
});
