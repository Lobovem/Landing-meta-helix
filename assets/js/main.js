// управление меню
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

// Горизонтальный слайдер. Считали DOM элементы
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

// вычисление и изменение высоты блока описания под максимальный текст
descriptionsList.forEach(el => heightsArr.push(el.clientHeight));
heightMax = Math.max(...heightsArr);
descriptionsList.forEach(el => el.style.height = `${heightMax}px`);