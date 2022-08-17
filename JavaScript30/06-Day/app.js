const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((a) => a.json())
  .then((b) => cities.push(...b));

function findMatches(wordToMath, citites) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMath, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      return `
      <li>
        <span class="name">${cityName},${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>`;
    })
    .join("");
  list.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const list = document.querySelector(".list");

searchInput.addEventListener("keyup", displayMatches);
