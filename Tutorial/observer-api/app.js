const targetImg = document.querySelector("#img");

let options = {
  // etkilenicek elemanın kapsayıcısı
  root: document.querySelector("#scrollArea"),
  // etkilenicek etki meselafesi elemanın mesefesi
  rootMargin: "100px",
  // 0.0 / 1 , array verilebilir örk: [0.2, 0.4, 0.8]
  threshold: 0.8,
};

const callback = (test) => {
  test[0].isIntersecting
    ? targetImg.classList.add("active")
    : targetImg.classList.remove("active");
  console.log(test);
};

let observer = new IntersectionObserver(callback, options);

observer.observe(targetImg);
