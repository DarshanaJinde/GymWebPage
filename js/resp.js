let burger = document.querySelector('.burger');
let navbar = document.querySelector('.nav-bar');
let navlist = document.querySelector('.nav-list');


burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-class-resp');
    
    
   
})