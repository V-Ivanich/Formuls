const spravka = document.querySelector('.spravka');
const rMenu = document.querySelector('.rightMenu');
const men =document.querySelector('.menuMy');
const divMenu = document.querySelector('.myMenu');


spravka.addEventListener('click', () => {
    rMenu.style.right = 2 + 'px';
})

rMenu.addEventListener('click', () => {
    rMenu.style.right = -218 + 'px';
})
men.addEventListener('click', () => {
    divMenu.style.top = 10 + 'px';
})

divMenu.addEventListener('click', () => {
    divMenu.style.top = -300 + 'px';
})