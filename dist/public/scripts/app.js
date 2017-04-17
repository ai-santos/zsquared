$(() => {
  window.addEventListener('scroll', event => {
    setOverlay(window.pageYOffset);
  });

  function setOverlay(yOffset) {
    const navBar = document.getElementsByTagName('nav')[0];
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