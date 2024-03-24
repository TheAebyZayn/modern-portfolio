// Nav Active Script...........
let AllLink = document.querySelectorAll('.nav-links li a');

AllLink.forEach(link =>{
    link.addEventListener('click',()=>{
        RemoveActive();
        link.classList.add('navActive');
    })
});

function RemoveActive(){
    AllLink.forEach(link =>{
        link.classList.remove('navActive')
    })
}

// About Script...........
document.querySelector('.show-more').addEventListener('click',()=>{
    document.querySelector('.read-more').classList.toggle('read-more-block');
    if(document.querySelector('.read-more').classList.contains('read-more-block')){
        document.querySelector('.show-more').textContent='Close' 
    }else{
        document.querySelector('.show-more').textContent='Show More' 
    }
});



// Skills Script...........
let AllTabs = document.querySelectorAll('.skills-tab');

AllTabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        tab.querySelector('.skills-items').classList.toggle('skills-items-show');
        tab.querySelector('.right').classList.toggle('icon-item');
    })
});



// NavLinks Script...........
let navLinks = document.querySelector('.nav-links');
let OpenMenu = document.querySelector('.open'); 
let CloseMenu = document.querySelector('.close'); 

OpenMenu.addEventListener('click',()=>{
    navLinks.classList.add('navShow');
    OpenMenu.style.display='none'
    CloseMenu.style.display='inline-block'
})
CloseMenu.addEventListener('click',()=>{
    navLinks.classList.remove('navShow');
    OpenMenu.style.display='inline-block'
    CloseMenu.style.display='none'
})