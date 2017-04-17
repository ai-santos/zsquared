$( () => {
  window.addEventListener('scroll', (event) => {
    setOverlay(window.pageYOffset)
  })

  function setOverlay(yOffset) {
    const navBar = document.getElementsByTagName('nav')[0]
    if(yOffset > 0) {
      navBar.classList.add('overlay')
    } else {
      navBar.classList.remove('overlay')
    }
  }

  let slides = document.querySelectorAll('.slides .slide');
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide,2000);

  function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
  }
})


