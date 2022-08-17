// .concat String ifadeleri birleştirir.

// Text
let text1 = "Fatih ";
let text2 = "Yıldırım ";
let text3 = "23 ";
let text4 = text1.concat(text2, text3);
console.log(text4);

// Array
let array1 = ["a", "b", "c"];
let array2 = ["d", "e", "f"];
let array3 = ["g", "h", "i"];
let array4 = array1.concat(array2);
console.log(array4);

array4 = array1.concat(array2, array3);
console.log(array4);