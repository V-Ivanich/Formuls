const spravka = document.querySelector('.spravka');
const rMenu = document.querySelector('.rightMenu');
const men =document.querySelector('.menuMy');
const divMenu = document.querySelector('.myMenu'); 
const zag = document.getElementById('scrH');
const par = document.getElementById('scrP');

let coord;
let koord;

function koordinat () {
    coord = men.getBoundingClientRect();
    koord = coord.left;
    divMenu.style.left = koord + 'px';
}

function klasN () {
    zag.className = "hi_on";
    par.className ="hi_on";
}
window.addEventListener('resize', function () {
    koordinat();
})


//горизонтальная панель
spravka.addEventListener('click', () => {
    rMenu.style.width = 218 + 'px';
    rMenu.style.right = 1 + 'px';
    setTimeout(klasN, 450);
})

rMenu.addEventListener('click', () => {
    rMenu.style.width = 0 + 'px';
    rMenu.style.right = -21 + 'px';
    zag.className = "hi_off";
    par.className = "hi_off";
})
//вертикальная панель
men.addEventListener('click', () => {
    koordinat();
    divMenu.style.top = 50 + 'px';
})

divMenu.addEventListener('click', () => {
    koordinat();
    divMenu.style.top = -300 + 'px';
})
