AOS.init();

let nav_2 = document.getElementById('nav-2');

function menus(){
    let Desplazamiento_Actual = window.pageYOffset;
    
    if(Desplazamiento_Actual<=80){
        nav_2.classList.remove('container-menu2-scroll');
        nav_2.className=('container-menu2');
        nav_2.style.transition="1s"; 
        nav_2.style.backgroundColor="#fff";
    }else{
        nav_2.classList.remove('container-menu2');
        nav_2.className=('container-menu2-scroll');
        nav_2.style.transition="1s"; 
        nav_2.style.backgroundColor="#fff";
    }
}

window.addEventListener('load',function(){
    menus();
});

window.addEventListener('scroll', function(){
    menus();
})