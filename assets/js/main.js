'use strict';

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  IOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows();
  },
};

if (isMobile.any()) {
  document.body.classList.add('touch');
} else {
  document.body.classList.add('pc');
}

//Меню бургер

const burgerMenu = document.querySelector('.navbar__burger');
if (burgerMenu) {
  const navbarList = document.querySelector('.navbar__list');
  burgerMenu.addEventListener('click', (e) => {
    document.body.classList.toggle('lock'); //Когда открылось меню, чтобы не было скролла страницы
    burgerMenu.classList.toggle('active');
    navbarList.classList.toggle('active');
  });

  const navbarLink = document.querySelectorAll('.navbar__link');
  navbarLink.forEach((navbarLink) => {
    navbarLink.addEventListener('click', (e) => {
      document.body.classList.remove('lock'); //Когда открылось меню, чтобы не было скролла страницы
      burgerMenu.classList.remove('active');
      navbarList.classList.remove('active');
    });
  });
}

//Прокрутка при клике

const menuLinks = document.querySelectorAll('.navbar__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLinks) => {
    menuLinks.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top;
      //  Если нужно вычесть высоту блока, например position:fixed
      // + pageXOffset -
      // document.querySelector('.test').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });
      e.preventDefault();
    }
  }
}
