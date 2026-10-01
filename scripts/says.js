// Слайдер для секции Says
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