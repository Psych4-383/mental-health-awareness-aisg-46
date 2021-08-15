const navUl = document.getElementById('nav-ul');
const navLiS = Array.from(document.getElementsByClassName('nav-li'));
const nav = document.getElementsByTagName('nav')[0];
const button_nav = document.getElementById('nav-hamburger');
navMinimise()
var navFull = false;

function navMinimise() {
    navLiS.forEach((e) => {
        e.style.display = 'none';
    });
    navUl.style.width = 'fit-content';
    nav.style.width = 'fit-content';
    navFull = false;
    button_nav.innerHTML = '&#9776;'
}
function navShow() {
    if (navFull === true){
        navMinimise()
    } else {
        navLiS.forEach((e) => {
            e.style.display = 'flex';
        })
        navUl.style.width = '100%';
        nav.style.width = '20%'
        navFull = true;
        button_nav.innerHTML = '&#x2716;'
    }
}