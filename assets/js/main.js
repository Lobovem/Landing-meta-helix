// управление меню
const menuBtn = document.querySelector('.navbar__burger');
const menuList = document.querySelector('.navbar__list');
const header = document.querySelector('header');
const body = document.querySelector('body');


menuBtn.addEventListener('click', (e) => {
  menuBtn.classList.toggle('active');
  header.classList.toggle('active');
  body.classList.toggle('active');

  if (menuList.classList.contains('active')) {
    setTimeout(() => menuList.classList.toggle('active'), 500);
  } else {
    menuList.classList.toggle('active');
  }
});