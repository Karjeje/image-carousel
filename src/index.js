import "./styles.css";

let currentIndex = 0;
let slides = [];
let dots = [];
let autoSlideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  currentIndex = index;
}

function nextSlide() {
  const next = (currentIndex + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  const prev = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(prev);
}

function startAutoSlide() {
  stopAutoSlide();
  autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  if (autoSlideInterval) clearInterval(autoSlideInterval);
}

export function initCarousel() {
  slides = Array.from(document.querySelectorAll(".slide"));
  dots = Array.from(document.querySelectorAll(".dot"));

  document.querySelector(".next").addEventListener("click", nextSlide);
  document.querySelector(".prev").addEventListener("click", prevSlide);
  dots.forEach((dot, i) => dot.addEventListener("click", () => showSlide(i)));

  showSlide(0);
  startAutoSlide();
}

initCarousel();
