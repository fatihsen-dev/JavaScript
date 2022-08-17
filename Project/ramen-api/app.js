const ramens = document.querySelector("#ramens");

fetch(`https://ramen-api.dev/shops?pretty&page=1&perPage=999`)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    res.shops.map((ramen) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img
          class="img"
          src="${ramen.photos[0].url}"
          alt="img"
        />
        <div class="name-id">
          <span class="name">${ramen.id}</span>
          <span class="id">${ramen.name}</span>
        </div>
     `;
      ramens.appendChild(li);
    });
  });
