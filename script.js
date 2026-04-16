// === NEW 4 HERO IMAGES (Updated) ===
const heroImages = [
  "https://iili.io/B8biPrQ.jpg",   // 1st - New first image
  "https://iili.io/B8biDTF.jpg",   // 2nd - New second image  
  "https://iili.io/B8yZoga.jpg",   // 3rd - New third image
  "https://iili.io/B8bivp9.jpg"    // 4th - New fourth image
];

let currentSlide = 0;
const slidesContainer = document.getElementById('hero-slides');

function createSlides() {
  heroImages.forEach((imgSrc, index) => {
    const div = document.createElement('div');
    div.className = `hero-bg absolute inset-0 ${index === 0 ? 'opacity-100' : 'opacity-0'}`;
    div.style.backgroundImage = `url('${imgSrc}')`;
    slidesContainer.appendChild(div);
  });
}

function changeSlide() {
  const slides = slidesContainer.children;
  
  slides[currentSlide].classList.remove('opacity-100');
  slides[currentSlide].classList.add('opacity-0');
  
  currentSlide = (currentSlide + 1) % heroImages.length;
  
  slides[currentSlide].classList.remove('opacity-0');
  slides[currentSlide].classList.add('opacity-100');
}

// Initialize Slideshow
window.onload = function() {
  createSlides();
  setInterval(changeSlide, 2000); // Change every 2 seconds with fade
};

// Make Reservation - Calls your number
function makeReservation() {
  window.location.href = "tel:9749536808";
}
function openImage(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  img.src = src;
  lightbox.classList.remove("hidden");
  lightbox.classList.add("flex");
}

document.getElementById("lightbox").onclick = function () {
  this.classList.remove("flex");
  this.classList.add("hidden");
};
// Replace with your actual logo direct link
const logoUrl = "";   // ← Upload your logo and paste direct link here

document.getElementById('logo').src = logoUrl;
document.getElementById('hero-logo').src = logoUrl;
document.getElementById('footer-logo').src = logoUrl;