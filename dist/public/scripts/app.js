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
});

// $(document).on('scroll', function (e) {
//     $('.navbar').css('opacity', ($(document).scrollTop() / 500));
// })