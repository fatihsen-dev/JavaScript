// .find(koşul); Parantez içine koşul yazılır (bu bir fonksiyon olabilir). Belirtilen koşulu sağlayan, dizi içerisindeki ilk eleman çağrılır.

let hayvanlar = ["Karınca", "Bizon", "Deve", "Ördek", "Fill"];

console.log(hayvanlar.find((test) => test == "Ördek"));

let num = [0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

console.log(num.find((test) => test >= 20));
