const slides = document.querySelectorAll('#slide img');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].style.opacity = '0'; // Oculta a imagem atual
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = '1'; // Exibe a próxima imagem
}

setInterval(nextSlide, 3000);
