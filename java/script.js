document.querySelectorAll('.Bslider').forEach(slider => {
    const track = slider.querySelector('.Bslider-track');
    const slides = slider.querySelectorAll('.Bslide');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    const intervalTime = parseInt(slider.getAttribute('data-interval'), 10);

    let index = 1; // start from the second, since we will add clones
    let interval;

    // Clone the first and last slides for seamless looping
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);

    const allSlides = slider.querySelectorAll('.Bslide');
    track.style.transform = `translateX(-${index * 100}%)`;

    function startAutoSlide() {
        interval = setInterval(() => {
            moveToNextSlide();
        }, intervalTime);
    }

    function moveToNextSlide() {
        if (index >= allSlides.length - 1) return;
        index++;
        track.style.transition = "transform 0.6s ease";
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    function moveToPrevSlide() {
        if (index <= 0) return;
        index--;
        track.style.transition = "transform 0.6s ease";
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    // After animation, check — if it's a clone, jump to the real slide without a jerk
    track.addEventListener('transitionend', () => {
        const currentSlide = allSlides[index];
        if (currentSlide === firstClone) {
            track.style.transition = "none";
            index = 1;
            track.style.transform = `translateX(-${index * 100}%)`;
        }
        if (currentSlide === lastClone) {
            track.style.transition = "none";
            index = allSlides.length - 2;
            track.style.transform = `translateX(-${index * 100}%)`;
        }
    });

    // Buttons
    nextBtn.addEventListener('click', () => {
        clearInterval(interval);
        moveToNextSlide();
    });

    prevBtn.addEventListener('click', () => {
        clearInterval(interval);
        moveToPrevSlide();
    });

    // Pause on hover
    slider.addEventListener('mouseenter', () => clearInterval(interval));
    slider.addEventListener('mouseleave', startAutoSlide);

    // Start auto sliding
    startAutoSlide();
});