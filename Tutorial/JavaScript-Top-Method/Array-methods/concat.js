// .concat(); Dizileri birleştirmek için kullanılır

let array1 = ["A", "B", "C"];
let array2 = ["D", "E", "F"];
let array3 = ["G", "H", "i"];

let array4 = array1.concat(array2);
console.log(array4);
array4 = array1.concat(array2, array3);
console.log(array4);
