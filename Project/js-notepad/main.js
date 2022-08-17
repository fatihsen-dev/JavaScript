let header = document.querySelector("#headerInput");
let description = document.querySelector("#descriptionInput");
let btn = document.querySelector("#btn");
let container = document.querySelector("#container");

btn.addEventListener("click", () => {
  if (header.value == "" || description.value == "") {
    console.log("Başlık ve not boş brakılamaz.");
  } else {
    let noteContainer = document.createElement("div");
    noteContainer.classList = "note-container";
    let headerText = document.createElement("div");
    headerText.classList = "header";
    let descriptionText = document.createElement("div");
    descriptionText.classList = "description";
    let dateTime = document.createElement("div");
    dateTime.classList = "date-time";
    let timeText = document.createElement("div");
    timeText.classList = "time";
    let dateText = document.createElement("div");
    dateText.classList = "date";

    noteContainer.appendChild(headerText);
    noteContainer.appendChild(descriptionText);
    noteContainer.appendChild(dateTime);
    dateTime.appendChild(timeText);
    dateTime.appendChild(dateText);
    container.appendChild(noteContainer);

    let tarih = new Date();
    headerText.innerHTML = header.value;
    descriptionText.innerHTML = description.value;
    timeText.innerHTML = tarih.getHours() + ":" + tarih.getMinutes();
    dateText.innerHTML =
      tarih.getDay() + "-" + tarih.getMonth() + "-" + tarih.getFullYear();

    header.value = "";
    description.value = "";
  }
});
