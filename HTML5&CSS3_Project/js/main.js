document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide-shadow section");
    let dots = document.querySelectorAll(".slider-controls .dot");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
            dots[i].classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    
    setInterval(nextSlide, 6000);

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);
});



const nav = document.getElementsByClassName("nav-bar")[0];
window.addEventListener("scroll",()=>{
    if(window.scrollY>100)
    {
        nav.style.top="-60px";
    }
    else
    {
        nav.style.top="0";
    }
});




let currentIndex = 0;
const slides = document.querySelectorAll(".main-section > section");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function moveSlide(step) {
    currentIndex += step;
    if (currentIndex >= slides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    showSlide(currentIndex);
}

setInterval(() => moveSlide(1), 3000);

showSlide(currentIndex);





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