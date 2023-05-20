const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('img');

// Clonar os primeiros slides e adicioná-los no final
slides.forEach((slide, index) => {
  if (index < slides.length) {
    const clone = slide.cloneNode(true);
    slider.appendChild(clone);
  }
});

// Obter a largura total do slider
const sliderWidth = slider.clientWidth;

// Definir a duração da animação com base na largura do slider
const animationDuration = slides.length * 3;

// Aplicar a duração personalizada à animação no CSS
const style = document.createElement('style');
style.textContent = `
  .slider {
    animation-duration: ${animationDuration}s;
  }
`;
document.head.appendChild(style);

// Reiniciar a animação quando o slider voltar para a primeira imagem
slider.addEventListener('animationiteration', () => {
  slider.style.transform = 'translateX(0)';
});
