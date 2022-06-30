// Menu header
var menu = document.querySelector('.header-menu');
var menuToggle = document.querySelector('.header-tool__menu');
var searchInput = document.querySelector('.header__search');
var searchToggle = document.querySelector('.header-tool__search');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.addEventListener("click", e => {
    if (!menu.contains(e.target) && !e.target.matches('.header-tool__menu')) {
        menu.classList.remove("active");
    } if(!searchInput.contains(e.target) && !e.target.matches('.header-tool__search')) {
        searchInput.classList.remove('active');
    }
});

searchToggle.addEventListener('click', () => {
    searchInput.classList.toggle('active');
});

