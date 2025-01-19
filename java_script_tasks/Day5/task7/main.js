
var imgs = document.querySelectorAll('.slider img');

var prevButton = document.querySelector('.previous');
var nextButton = document.querySelector('.next');

var playButton = document.querySelector('.play');
var stopButton = document.querySelector('.stop');

var curIndex = 0;
var interval;

function displayImg(index) {
    imgs.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextImg() {
    curIndex = (curIndex + 1) % imgs.length;
    displayImg(curIndex);
}

function prevImg() {
    curIndex = (curIndex - 1 + imgs.length) % imgs.length;
    displayImg(curIndex);
}

function startDisplay() {
    if (!interval) {
        interval = setInterval(nextImg, 2000);
    }
}

function stopDisplay() {
    clearInterval(interval);
    interval = null;
}

prevButton.addEventListener('click', prevImg);
nextButton.addEventListener('click', nextImg);
playButton.addEventListener('click', startDisplay);
stopButton.addEventListener('click', stopDisplay);
