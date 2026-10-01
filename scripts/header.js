let btnLogin = document.getElementById('btn-login');
let overlay = document.getElementById('overlay');
let loginPopup = document.getElementById('login-popup');
let btnClose = document.getElementById('btn-close');
let body = document.getElementById('body');

btnLogin.addEventListener('click', function(){
    body.style.overflow = "hidden";
    overlay.style.display = "block";
    loginPopup.style.display = "block";
});

overlay.addEventListener('click', function(){
    body.style.overflow = "auto";
    overlay.style.display = "none";
    loginPopup.style.display = "none";
});

btnClose.addEventListener('click', function(){
    body.style.overflow = "auto";
    overlay.style.display = "none";
    loginPopup.style.display = "none";
});

loginPopup.addEventListener('click', function(event) {
    event.stopPropagation();
});