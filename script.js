var menuMain = document.querySelector('#mainmenu');
var menuSide = document.querySelector('#menuSide');
var sideNav = document.querySelector('#sideNav');
var body = document.querySelector('body');

menuMain.addEventListener('click', function(){
    sideNav.style.left = '0';
    sideNav.style.boxShadow = '0 0 20px 20000000px rgba(0, 0, 0, 0.5)';
    body.style.overflow = 'hidden';    
})

menuSide.addEventListener('click', function(){
    sideNav.style.left = '-20%';
    sideNav.style.boxShadow = '';
    body.style.overflow = 'initial';
})