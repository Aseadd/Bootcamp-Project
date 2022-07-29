const hamburger1 = document.querySelector('.hamburger1');
const hamburger = document.querySelector('.hamburger');
const barMenu = document.querySelector('.bar-menu');
const mainContainer = document.querySelector('.main-container');
const menuNav = document.querySelector('.menu-nav');
const menuList = document.querySelector('.menu-list');
const header = document.querySelector('.header-links');
function myFunction() {
  hamburger1.classList.toggle('active');
  barMenu.classList.toggle('active');
  mainContainer.classList.toggle('active');
  menuList.classList.toggle('active');
  header.classList.toggle('active');
}

hamburger1.addEventListener('click', myFunction);
const navLink = document.querySelectorAll('.nav-link');

function closeBar() {
  hamburger1.classList.remove('active');
  barMenu.classList.remove('active');
  mainContainer.classList.remove('active');
  menuList.classList.remove('active');
  header.classList.remove('active');
}
navLink.forEach((n) => n.addEventListener('click', closeBar));

function myFunction2() {
  hamburger.classList.toggle('active');
  mainContainer.classList.toggle('active');
  menuList.classList.toggle('active');
}
hamburger.addEventListener('click', myFunction2);

function closeMenu() {
  hamburger.classList.remove('active');
  mainContainer.classList.remove('active');
  menuNav.classList.remove('active');
  menuList.classList.remove('active');
}
navLink.forEach((n) => n.addEventListener('click', closeMenu));
