let navWrap = document.querySelector('.navigation__wrapper');
// let navUserList = document.querySelector('.user-list');
let headerToggle = document.querySelector('.header__toggle');

headerToggle.addEventListener('click', function () {
  if (headerToggle.classList.contains('header__toggle--closed')) {
    headerToggle.classList.remove('header__toggle--closed');
    headerToggle.classList.add('header__toggle--opened');
  } else {
    headerToggle.classList.add('header__toggle--closed');
    headerToggle.classList.remove('header__toggle--opened');
  }

  navWrap.classList.toggle('navigation__wrapper--visible')
  // navUserList.classList.toggle('user-list--visible')
});


//Initialize Swiper
  let swiper = new Swiper(".mySwiper", {
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
});

//Modal close-open
let modal = document.querySelector('.modal');
let buttonClose = document.querySelector('.modal__button-close');
let buttonOpen = document.querySelector('.header__button-reserve')

buttonClose.addEventListener('click', function () {
  modal.classList.add('modal--close');
});

buttonOpen.addEventListener('click', function () {
  modal.classList.remove('modal--close');
});

//Send form
const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  console.log(...data);

});
