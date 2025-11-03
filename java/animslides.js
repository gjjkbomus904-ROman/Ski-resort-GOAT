document.addEventListener("DOMContentLoaded", () => {

  // Функция для бесконечного слайдера
  function setupInfiniteSlider(slidesSelector, speed = 3000) {
    const slidesContainer = document.querySelector(slidesSelector);
    const slides = slidesContainer.children;

    // Клонируем первый слайд для плавного перехода
    const firstClone = slides[0].cloneNode(true);
    slidesContainer.appendChild(firstClone);

    let index = 0;

    function moveSlide() {
      index++;
      slidesContainer.style.transition = "transform 0.6s linear";
      slidesContainer.style.transform = `translateX(-${index * 100}%)`;

      // Когда дошли до клона — мгновенно возвращаемся к первому
      if (index === slides.length) {
        setTimeout(() => {
          slidesContainer.style.transition = "none";
          slidesContainer.style.transform = "translateX(0)";
          index = 0;
        }, 600); // совпадает с transition
      }
    }

    setInterval(moveSlide, speed);
  }

  // Запускаем для всех трёх
  setupInfiniteSlider(".slides-1", 3000);
  setupInfiniteSlider(".slides-2", 3500);
  setupInfiniteSlider(".slides-3", 4000);
});
