// .filter(koşul); Parantez içine koşul yazılır (bu bir fonksiyon olabilir). Belirtilen koşulu sağlayan, dizi içerisindeki tüm elemanlar çağrılır.

let hayvanlar = ["Karınca", "Bizon", "Bizon", "Deve", "Ördek", "Fill"];

console.log(hayvanlar.filter((test) => test == "Bizon"));

let num = [0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

console.log(num.filter((test) => test >= 30));
