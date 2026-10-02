// Слайдер для секции Says
let saysList = document.getElementById('says-list');
let saysButtonPrev = document.getElementById('saysBtnPrev');
let saysButtonNext = document.getElementById('saysBtnNext');
let saysSlide = 0;

function saysSliderNext() {
    if (saysSlide >= -2) {
        saysSlide = saysSlide - 1;

        if (window.innerWidth <= 500) {
            saysList.style.transform = `translateX(${saysSlide * 337}px)`;
        } else {
            saysList.style.transform = `translateX(${saysSlide * 373}px)`;
        }
    }
}

function saysSliderPrev() {
    if (saysSlide < 1) {
        saysSlide = saysSlide + 1;

        if (window.innerWidth <= 500) {
            saysList.style.transform = `translateX(${saysSlide * 337}px)`;
        } else {
            saysList.style.transform = `translateX(${saysSlide * 373}px)`;
        }
    }
}

saysButtonPrev.addEventListener('click', saysSliderPrev);
saysButtonNext.addEventListener('click', saysSliderNext);