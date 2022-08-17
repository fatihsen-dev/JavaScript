let obj1 = {
  name: "Fatih Şen",
  age: 23,
};
let obj2 = {
  name: "Yusuf Şen",
  age: 21,
};
let obj3 = {
  name: "Ramazan Şen",
  age: 24,
};

//* Promise 1
const promise1 = new Promise((resolve) => resolve(obj1))
  .then((resolve) => {
    console.log(resolve);
    return resolve;
  })
  .catch((reject) => console.log(reject));

//* Promise 2
const promise2 = new Promise((resolve) => resolve(obj2))
  .then((resolve) => {
    console.log(resolve);
    return resolve;
  })
  .catch((reject) => console.log(reject));

//* Promise 3
const promise3 = new Promise((resolve) => resolve(obj3))
  .then((resolve) => {
    console.log(resolve);
    return resolve;
  })
  .catch((reject) => console.log(reject));

//?=======================================================================

// Promise.all() bütün promiseler başarılı olursa veri alınır
Promise.all([promise1, promise2, promise3])
  .then((resolve) => resolve)
  .then((resolve) => console.log(resolve));

// Promise.race() sonuçlanan ilk  promiseyi başarılı başarısız farketmeksizin alır
Promise.race([promise1, promise2, promise3])
  .then((resolve) => resolve)
  .then((resolve) => console.log(resolve));

// Promise.allSettled() bütün promiseler başarılı başarısız farketmeksizin alınır
Promise.allSettled([promise1, promise2, promise3]).then((resolve) =>
  console.log(resolve)
);

// Promise.any() ilk başarılı promiseyi alır
Promise.any([promise1, promise2, promise3]).then((resolve) =>
  console.log(resolve)
);
