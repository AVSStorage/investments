const fadeOutUpAnimatedElement =  document.querySelector('.fade-out-up');
const fadeOutAnimatedElement =  document.querySelector('.fade-out');
const fadeInAnimatedElement =  document.querySelector('.fade-in');


const loadAnimation = function () {
  fadeOutUpAnimatedElement.classList.add('animated', 'fadeOutUp', 'slower');
  fadeOutAnimatedElement.classList.add('animated', 'fadeOut', 'slower');
  setTimeout(function () {
    fadeOutAnimatedElement.classList.add('absolute');
    fadeInAnimatedElement.classList.add('animated', 'fadeIn', 'slower');
  }, 2800);
}

elements = document.querySelectorAll('.preview__item');
Array.from(elements).forEach(function (element) {
  element.addEventListener("click", loadAnimation);
})

