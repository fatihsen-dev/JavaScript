//! Modül yapısını çalışması için ana js dosyasını html type'ını module olarak belirtin

//? Default export
// sadece bir default export yapılabilir
// (import) kısmındaki isimlendirme önemli değil
import hello from "./default.js";
console.log(hello());

//? Named (çoklu Export) export
// import etmek için süslü parantez kunlanmalıyız
import { name, dogumTarihi } from "./named.js";
console.log(name);
console.log(dogumTarihi(23, 2022));

//? Default and Named export
//Bir dosyadan hem named hem bir adet default export çekebilrisiniz
import allFunction from "./default-and-named.js";
allFunction();

import { allVeriable } from "./default-and-named.js";
console.log(allVeriable);

// Named export ismi değiştirilmiş ve değiştirme
import { cat, kopek } from "./named.js";
console.log(cat, kopek);

//? dosyadan export edilmiş bütün verileri çekme
import * as all from "./all.js";
console.log(all.isim);
console.log(all.yas);
console.log(all.sehir);
