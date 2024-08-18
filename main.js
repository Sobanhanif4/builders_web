let currentCardSlide = 0;

function changeCardSlide(direction) {
    const slides = document.querySelectorAll('.card-slide');
    const dots = document.querySelectorAll('.card-pagination-dot');
    const slideCount = slides.length;
    const visibleSlides = 5; 

    currentCardSlide += direction;

    if (currentCardSlide >= slideCount - visibleSlides + 1) {
        currentCardSlide = 0;
    } else if (currentCardSlide < 0) {
        currentCardSlide = slideCount - visibleSlides;
    }

    updateCardSlider();
}

function updateCardSlider() {
    const slides = document.querySelectorAll('.card-slide');
    const dots = document.querySelectorAll('.card-pagination-dot');

    // Update slide position
    const offset = -currentCardSlide * 700 / slides.length;
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentCardSlide].classList.add('active');
}

function createCardPagination() {
    const slideCount = document.querySelectorAll('.card-slide').length;
    const paginationContainer = document.querySelector('.card-pagination');

    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('card-pagination-dot');
        dot.addEventListener('click', () => {
            currentCardSlide = i;
            updateCardSlider();
        });
        paginationContainer.appendChild(dot);
    }

    updateCardSlider(); 
}

createCardPagination();


document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
  });
});



document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".mySwiper", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
      loop: true,
    });
  
    document.querySelectorAll('.toggle-overlay').forEach(button => {
      button.addEventListener('click', function () {
        const overlay = this.previousElementSibling;
        overlay.classList.toggle('active');
        const icon = this.querySelector('.arrow-icon');
        icon.textContent = overlay.classList.contains('active') ? '▼' : '▲';
      });
    });
  });
  
  

  
  