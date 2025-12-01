const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".nextb");
const prevBtn = document.querySelector(".prevb");

let current = 0;
let interval;

// Показ слайда
function showSlide(index) {
  if (index >= slides.length) current = 0;
  else if (index < 0) current = slides.length - 1;
  else current = index;

  // Скрываем все
  slides.forEach(s => s.style.display = "none");
  dots.forEach(dot => dot.classList.remove("active"));

  // Показываем один
  slides[current].style.display = "block";
  dots[current].classList.add("active");
  setTimeout(showSlides, 4000); // скорость смены
}

// Следующий/предыдущий
function nextSlide() {
  showSlide(current + 1);
}
function prevSlide() {
  showSlide(current - 1);
}

// Автопрокрутка
function startAutoSlide() {
  interval = setInterval(nextSlide, 5000);
}
function stopAutoSlide() {
  clearInterval(interval);
}

// Кнопки
nextBtn.addEventListener("click", () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});
prevBtn.addEventListener("click", () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});

// Точки
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    stopAutoSlide();
    showSlide(i);
    startAutoSlide();
  });
});

// Старт
showSlide(0);
startAutoSlide();