let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let content = document.querySelector("#content");

// Text Verisi çekme butonu
btn1.onclick = () => {
  content.innerHTML = "";
  fetch("text.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      if (data.includes("Cannot")) {
        content.innerHTML = "Dosya Bulunamadı :(";
      } else {
        content.innerHTML = data;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// JSON Verisi çekme butonu
btn2.onclick = () => {
  content.innerHTML = '<ul class="article"></ul>';
  let contentList = document.querySelector(".article");
  fetch("article.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((e) => {
        contentList.innerHTML += `<li> 
            <span>${e.title}</span>
            <span>${e.body}</span>
        </li>`;
      });
    });
};

// Api Verisi çekme butonu
btn3.onclick = () => {
  content.innerHTML = '<ul class="api"></ul>';
  let contentApi = document.querySelector(".api");
  fetch("https://api.github.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((e) => {
        contentApi.innerHTML += `
        <li>
            <span class="userid">${e.id}</span>
            <span class="user">
              <a
                class="useravatar"
                href="${e.avatar_url}"
                target="_blank"
              >
                <img src="${e.avatar_url}","
                alt=""/>
              </a>
              <span class="username">${e.login}</span>
            </span>
            <a class="userurl" target="_blank" href="${e.html_url}"
              >Profile Link</a
            >
          </li>
        
        `;
      });
    });
};
