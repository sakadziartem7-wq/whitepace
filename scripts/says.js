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
            saysList.style.transform = `translateX(${saysSlide * 341}px)`;
        }
    }
}

function saysSliderPrev() {
    if (saysSlide < 1) {
        saysSlide = saysSlide + 1;

        if (window.innerWidth <= 500) {
            saysList.style.transform = `translateX(${saysSlide * 337}px)`;
        } else {
            saysList.style.transform = `translateX(${saysSlide * 341}px)`;
        }
    }
}

saysButtonPrev.addEventListener('click', saysSliderPrev);
saysButtonNext.addEventListener('click', saysSliderNext);

let startX = 0;
let endX = 0;

saysList.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
});

saysList.addEventListener('touchend', function(event) {
    endX = event.changedTouches[0].clientX;

    if (startX - endX > 50) {
        saysSliderNext();
    }

    if (endX - startX > 50) {
        saysSliderPrev();
    }
});