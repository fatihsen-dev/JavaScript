/* 
.split(”,”)
Virgüllerin kullanıldığı yerlerden dizi şeklinde ayırır.
Boşluk veya başka şeyden de ayırılabilir. (Madde
haline getirir)
*/

let text1 = "Karınca Bizon Deve Ördek Fill";
let text2 = "Karınca,Bizon,Deve,Ördek,Fill";

// boşluklardan ayırma
let hayvanlar = text1.split(" ");
console.log(hayvanlar);

// virgülerden ayırma
hayvanlar = text2.split(",");
console.log(hayvanlar);
