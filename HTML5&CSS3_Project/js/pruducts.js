const preloader = document.getElementsByClassName("preloader")[0];

window.onload = function () {
  setTimeout(function () {
    preloader.style.transition = "opacity 0.5s ease"
    preloader.style.opacity = 0
    setTimeout(function () {
      preloader.style.display = "none"

    }, 400)
  }, 1000)
}


document.addEventListener("DOMContentLoaded", function () {
    const productSection = document.querySelector(".product-s");

    function checkScroll() {
        const rect = productSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            productSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});




document.addEventListener("DOMContentLoaded", function () {
    const productSection = document.querySelector(".product");

    function checkScroll() {
        const rect = productSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            productSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});