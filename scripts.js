let planItem = document.getElementsByClassName('plan__item');
let buttonPrev = document.getElementById('button-prev');
let buttonNext = document.getElementById('button-next');


function sliderPrev() {
    planItem[0].style.transform = 'translateX(100%)';
    planItem[1].style.transform = 'translateX(100%)';
    planItem[2].style.transform = 'translateX(100%)';
}

function sliderNext() {
    planItem[0].style.transform = 'translateX(-100%)';
    planItem[1].style.transform = 'translateX(-100%)';
    planItem[2].style.transform = 'translateX(-100%)';
}

buttonPrev.addEventListener('click', sliderPrev);
buttonNext.addEventListener('click', sliderNext);

let saysItem = document.getElementsByClassName('says__item');
let saysBtnPrev = document.getElementById('saysBtnPrev');
let saysBtnNext = document.getElementById('saysBtnNext');

function sliderSaysPrev() {
    saysItem[0].style.transform = 'translateX(100%)';
    saysItem[1].style.transform = 'translateX(100%)';
    saysItem[2].style.transform = 'translateX(100%)';
}

function sliderSaysNext() {
    saysItem[0].style.transform = 'translateX(-100%)';
    saysItem[1].style.transform = 'translateX(-100%)';
    saysItem[2].style.transform = 'translateX(-100%)';
}

saysBtnPrev.addEventListener('click', sliderSaysPrev);
saysBtnNext.addEventListener('click', sliderSaysNext);