let burgerButton = document.querySelector('.burger');
let userButton = document.querySelector('.user');

burgerButton.addEventListener('click', function(e){
    let menu = document.querySelector('.menu');
    this.classList.toggle('burger-open');
    menu.classList.toggle('menu-open');
})
userButton.addEventListener('click', function(e){
    let userMenu = document.querySelector('.user-menu');
    this.classList.toggle('user-open');
    userMenu.classList.toggle('user-menu-open');
})