//? Named export (çoklu Export)
export let name = "Fatih Şen";
export let age = 23;

export function dogumTarihi(yas, yıl) {
  return yıl - yas;
}

let cat = "Kedi";
let dog = "Köpek";

// as metodu ile export ismi değiştirilebilir
export { cat, dog as kopek };
