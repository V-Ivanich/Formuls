const spravka = document.querySelector('.spravka');
const rMenu = document.querySelector('.rightMenu');
const men =document.querySelector('.menuMy');
const divMenu = document.querySelector('.myMenu');

let coord;
let koord;

function koordinat () {
    coord = men.getBoundingClientRect();
    koord = coord.left;
    divMenu.style.left = koord + 'px';
}

window.addEventListener('resize', function () {
    koordinat();
})


//горизонтальная панель
spravka.addEventListener('click', () => {
    rMenu.style.right = 2 + 'px';
})

rMenu.addEventListener('click', () => {
    rMenu.style.right = -218 + 'px';
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
