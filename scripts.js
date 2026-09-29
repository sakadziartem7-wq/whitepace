let buttonTry = document.getElementById('button-try');
let heroSection = document.getElementById('hero');

function changeColorHero() {
    heroSection.style.backgroundColor = 'red';
}

buttonTry.addEventListener('click', changeColorHero);

let name ="artem";
let age =12;
console.log(`меня зовут ${name}, мне$ {age}лет }`);
