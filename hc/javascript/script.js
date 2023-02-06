const btn = document.querySelector('.btn1');
const menu = document.querySelector('.navbar');

btn.addEventListener('click',()=>{
    btn.classList.toggle('active');
    menu.classList.toggle('open');
    if(menu.classList.contains('open')){
        console.log('je suis là')
        menu.style.maxHeight = '400px';
    }
    else{
        menu.removeAttribute('style');
    }
})

// changement d'image background de l'entete 
const divOfBackground = document.querySelector('.header');
const btn1 = document.querySelector('.head-left.gauche');
const btn2 = document.querySelector('.head-right.droite');
let index = 0;
const background = 
    ["../ressources/chambre/téléchargement.jpg",
    "image2.jpg",
    "image2.jpg"];

btn1.addEventListener('click',()=>{
    divOfBackground.style.background = `url(${background[index]})`;
    index = (index + 1) %background.length;
})

btn2.addEventListener('click',()=>{
    divOfBackground.style.background = `url(${background[index]})`;
    index = (index - 1) %background.length;
})