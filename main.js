let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.pagination-dot');
    const slideCount = slides.length;

    currentSlide += direction;

    if (currentSlide >= slideCount) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slideCount - 1;
    }

    updateSlider();
}

function updateSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.pagination-dot');

    // Update slide position
    const offset = -currentSlide * 100 / slides.length;
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });

    // Update pagination dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

function createPagination() {
    const slideCount = document.querySelectorAll('.slide').length;
    const paginationContainer = document.querySelector('.pagination');

    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('pagination-dot');
        dot.addEventListener('click', () => {
            currentSlide = i;
            updateSlider();
        });
        paginationContainer.appendChild(dot);
    }

    updateSlider(); // Initialize pagination
}

// Initialize pagination and slider
createPagination();



// let currentSlide2 = 0;

// function changeSlide2(n) {
//   let slides = document.querySelectorAll(".slider-2-slide");
//   currentSlide2 += n;
  
//   if (currentSlide2 < 0) {
//     currentSlide2 = slides.length - 1;
//   } else if (currentSlide2 >= slides.length) {
//     currentSlide2 = 0;
//   }

//   slides.forEach((slide, index) => {
//     slide.style.display = (index === currentSlide2 || index === currentSlide2 + 1) ? "flex" : "none";
//   });
// }

// function showPopup() {
//   document.getElementById("popup").style.display = "block";
// }

// function closePopup() {
//   document.getElementById("popup").style.display = "none";
// }

// // Initialize slider
// changeSlide2(0);

// let currentCustomSlide = 0;

// function changeCustomSlide(direction) {
//   const slides = document.querySelectorAll('.custom-slide');
//   const totalSlides = slides.length;

//   currentCustomSlide += direction;

//   if (currentCustomSlide >= totalSlides) {
//     currentCustomSlide = 0;
//   } else if (currentCustomSlide < 0) {
//     currentCustomSlide = totalSlides - 1;
//   }

//   const newTransformValue = `translateX(-${currentCustomSlide * 100}%)`;
//   document.querySelector('.custom-slides').style.transform = newTransformValue;
// }

// function showDetails() {
//   alert('Details about the washroom and tiles.');
// }

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