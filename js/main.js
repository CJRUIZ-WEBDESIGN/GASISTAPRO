const toggleIcon = document.getElementById('toggleTheme');
const body = document.body;
const logo = document.getElementById('logo');

toggleIcon.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon');
        logo.src = '../images/logooscuro.png';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-mode');
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun');
        logo.src = '../images/logooscuro.png';
        localStorage.setItem('theme', 'dark');
    }
});

// Al cargar la página, verifica el tema y ajusta el ícono y el logo en consecuencia
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun');
        logo.src = '../images/logooscuro.png';
    } else {
        logo.src = '../images/logooscuro.png';
    }
});

let currentSlide = 0;
let slides = null;
let carouselInterval = null;

document.addEventListener("DOMContentLoaded", function() {
    slides = document.querySelectorAll(".carousel-slide");

    const nextButton = document.querySelector('.carousel-next');
    const prevButton = document.querySelector('.carousel-prev');
    const carouselContainer = document.querySelector('.carousel');

    nextButton.addEventListener('click', function() {
        manualSlideChange(nextSlide);
    });
    
    prevButton.addEventListener('click', function() {
        manualSlideChange(prevSlide);
    });

    carouselContainer.addEventListener('mouseover', pauseCarousel);
    carouselContainer.addEventListener('mouseout', startCarousel);

    startCarousel();
});

function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

function prevSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
}

function manualSlideChange(callback) {
    pauseCarousel();
    callback();
    setTimeout(startCarousel, 5000); // Wait for 8 seconds after a manual slide change before auto-changing again
}

function startCarousel() {
    if(carouselInterval) {
        clearInterval(carouselInterval);
    }
    carouselInterval = setInterval(nextSlide, 5000);
}

function pauseCarousel() {
    clearInterval(carouselInterval);
}
