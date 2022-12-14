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


// считали DOM элементы
const headersList = document.querySelectorAll('.slider');
const indicatorsList = document.querySelectorAll('.slider__indicator');

let index = 0;
let interval = 5000;
let heightsArr = [];
let heightMax = null;

setInterval(() => {
  // снимаем классы active для первых элементов
  headersList[index].classList.toggle('active');
  indicatorsList[index].classList.toggle('active');
  // увеличиваем индекс, пока не превышено количество элементов
  index = (index + 1) % headersList.length;
  // ставим классы active следующим элементам
  headersList[index].classList.toggle('active');
  indicatorsList[index].classList.toggle('active');
}, interval);


// Горизонтальный слайдер. Считали DOM элементы
const headersLis = document.querySelectorAll('.slider-alt');
const indicatorsLis = document.querySelectorAll('.slider-alt__indicator-alt');

let ind = 0;
let interv = 5000;
let heightsAr = [];
let heightM = null;

setInterval(() => {
  // снимаем классы active для первых элементов
  headersLis[ind].classList.toggle('active');
  indicatorsLis[ind].classList.toggle('active');
  // увеличиваем индекс, пока не превышено количество элементов
  ind = (ind + 1) % headersLis.length;
  // ставим классы active следующим элементам
  headersLis[ind].classList.toggle('active');
  indicatorsLis[ind].classList.toggle('active');
}, interval);
