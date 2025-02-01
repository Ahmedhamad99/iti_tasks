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