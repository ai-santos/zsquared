'use strict';

$(function () {
  window.addEventListener('scroll', function (event) {
    setOverlay(window.pageYOffset);
  });

  function setOverlay(yOffset) {
    var navBar = document.getElementsByTagName('nav')[0];
    if (yOffset > 0) {
      navBar.classList.add('overlay');
    } else {
      navBar.classList.remove('overlay');
    }
  }

  var slides = document.querySelectorAll('.slides .slide');
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide, 2000);

  function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
  }
});