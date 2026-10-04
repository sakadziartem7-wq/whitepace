// Слайдер для секции Plan
let planList = document.getElementById('plan-list');
let buttonPrev = document.getElementById('button-prev');
let buttonNext = document.getElementById('button-next');
let slide = 0;

function sliderNext() {
    if (slide >= 0) {
        slide = slide - 1;

        if (window.innerWidth <= 500) {
            planList.style.transform = `translateX(${slide * 321}px)`;
        } else {
            planList.style.transform = `translateX(${slide * 472}px)`;
        }
    }
}

function sliderPrev() {
    if (slide < 1) {
        slide = slide + 1;

        if (window.innerWidth <= 500) {
            planList.style.transform = `translateX(${slide * 321}px)`;
        } else {
            planList.style.transform = `translateX(${slide * 472}px)`;
        }
    }
}

buttonPrev.addEventListener('click', sliderPrev);
buttonNext.addEventListener('click', sliderNext);

let planStartX = 0;
let planEndX = 0;

planList.addEventListener('touchstart', function(event) {
    planStartX = event.touches[0].clientX;
});

planList.addEventListener('touchend', function(event) {
    planEndX = event.changedTouches[0].clientX;

    if (planStartX - planEndX > 50) {
        sliderNext();   
    }

    if (planEndX - planStartX > 50) {
        sliderPrev();
    }
});