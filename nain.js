let mobileIcon = document.querySelector('.mobile-icon');
let navBar = document.querySelector('.menu-items');

mobileIcon.addEventListener('click', () => {
    navBar.classList.toggle('active');
})