const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#009999";
  p.style.fontSize = "50px";
  p.style.transition = ".15s";
}

// clearing
//console.clear();

// Regular
console.log("Hello");

// Interpolated
console.log("Hi i am a %s String!,", "😃");

// Styled
console.log(
  "%cI am soome great text",
  `font-size:20px;
  background:#eee;
  color:#222;
  padding:20px;
  `
);

// warning!
console.warn("OH NOO!");

// Error :|
console.error("OH NOO!");

// Info
console.info("Hmm");

// Testing
console.assert(1 === 1, "Bu bir hata mesajıdır");

// Viewing DOM Elements
const p = document.querySelector("#pElement");
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.group(dog.name);
  console.log(`Dog Name: ${dog.name}`);
  console.log(`Dog Age: ${dog.age}`);
  console.groupEnd();
});

// counting
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("count");

// timing
console.time("test");

function test() {
  console.timeEnd();
}
test();

// table

console.table(dogs);
