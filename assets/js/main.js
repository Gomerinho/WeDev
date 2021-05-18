const burger = document.querySelector('.burger__menu');
const menu = document.querySelector('.header__menu');
const backdrop = document.querySelector('.backdrop');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  backdrop.classList.toggle('active');
});
