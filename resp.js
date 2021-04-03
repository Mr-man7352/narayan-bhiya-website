burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');
// for drop down , sub menu
courses = document.querySelector('.courses');
subMenu = document.querySelector('.sub-menu-1')
mobileMenu = document.querySelector('.mobile-menu')


var flag = 0;


burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    flag = 1;

})

courses.addEventListener('click',()=>{
    
    if(subMenu.style.display==="block"){
        subMenu.style.display='none';

    }
    else if(flag==1){
        subMenu.style.display='none';




        if(mobileMenu.style.display==="block"){
            mobileMenu.style.display='none';
            navbar.style.height='447';

        }
        else{
            mobileMenu.style.display='block';

            navbar.style.height='747';
        }
    }
    else{
        subMenu.style.display='block';

    }

})