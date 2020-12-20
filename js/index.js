const $menubtn = document.querySelector('.menu-btn');
$menubtn.addEventListener('click',()=> {
    $menubtn.nextElementSibling.classList.toggle('menu-active');
});

const desktopSize = window.matchMedia("(min-width: 970px)");
window.addEventListener('resize', ()=> {
    if(desktopSize.matches) $menubtn.nextElementSibling.classList.remove('menu-active');
});

