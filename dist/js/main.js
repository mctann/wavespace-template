const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () =>{
    if (menu.classList.contains('hidden-menu')){
        menu.classList.remove('hidden-menu');
    }else{
        menu.classList.add('hidden-menu');
    }
});



