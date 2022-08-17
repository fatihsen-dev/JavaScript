//.splice(); Dizinin belirtilen elemandan sonra kaç elemanın silineceğini ve bu işlemden sonra (istenilirse) eleman eklenmesini sağlar. Örneğin: names.splice(0,1,”newName”);

let hayvanlar = ["Karınca", "Bizon", "Deve", "Ördek", "Fill"];
console.log(hayvanlar);

hayvanlar.splice(2, 1, "Istakoz");
console.log(hayvanlar);
hayvanlar.splice(5, 0, "Zürafa");
console.log(hayvanlar);
