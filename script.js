const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider-container');
const sliderItems = document.querySelectorAll('.slider-item');
const sliderWidth = slider.offsetWidth;
let slideIndex = 0;

window.addEventListener('resize', () => {
  sliderWidth = slider.offsetWidth;
});

setInterval(() => {
  slideIndex++;
  if (slideIndex > sliderItems.length - 3) {
    slideIndex = 0;
  }
  sliderContainer.style.transform = `translateX(-${slideIndex * sliderWidth / 7.5}px)`;
}, 3000);