let buttonTry = document.getElementById('button-try');
let heroSection = document.getElementById('hero');

function changeColorHero() {
    heroSection.style.backgroundColor = 'red';
}

buttonTry.addEventListener('click', changeColorHero);