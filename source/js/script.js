var toggle = document.querySelector('.slider__toggle');
var sliderList = document.querySelector('.slider__list');

var leftButton = document.querySelector(".slider__button--before");
var rightButton = document.querySelector(".slider__button--after");

leftButton.addEventListener("click", function () {
  sliderList.style.setProperty('--slide-width', '0px');
  toggle.style.setProperty('--range-position', 'var(--left-position)');
});

rightButton.addEventListener("click", function () {
  sliderList.style.setProperty('--slide-width', 'var(--slider-width)');
  toggle.style.setProperty('--range-position', 'var(--right-position)');
});
