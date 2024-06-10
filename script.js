const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides[currentSlide].style.display = 'block';
}

function hideSlides() {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
}

function changeSlide() {
  hideSlides();
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
}

showSlide();
setInterval(changeSlide, 5000);