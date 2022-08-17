// arrow function içerisinde this özeliği kunlanılamaz

//? Default fonction
function functionName() {
  return "Default fonction";
}
// console.log(functionName());

//? Arrow function
let arrowName = () => {
  return "Arrow function";
};
// console.log(arrowName());

//* Kısa kunlanım
let arrowName2 = () => "Arrow function 2";
// console.log(arrowName2());

//* Arrow function parametre ile kunlanma
let arrowName3 = (name) => `Hello ${name}`;
// console.log(arrowName3("World"));

// Birden fazla parametre ile kunlanım
let arrowName4 = (name, name2) => `Hello ${name} ${name2}`;
// console.log(arrowName4("World", "2"));

//? Örnekler Array
let animals = ["Cat", "Dog", "Chicken", "Crow"];
console.log(animals.map((animal) => animal.length));

//? Örnekler Object
let obj = [
  {
    name: "Tayfun Erbilen",
    age: 34,
  },
  {
    name: "Sadık Turan",
    age: 27,
  },
  {
    name: "Fatih Şen",
    age: 23,
  },
];
console.log(obj.map((obj) => obj.name));
