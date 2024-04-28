let currentSlide = 0;
const slides = document.querySelectorAll('.gallery-image');

function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;

    const slideWidth = slides[0].clientWidth;
    const moveX = -(slideWidth * currentSlide);
    document.querySelector('.gallery-slider').style.transform = `translateX(${moveX}px)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}
window.onload = () => {
    showSlide(currentSlide);
};


document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});  //Image Gallery



document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('togglebutton');
    const body = document.body;

    toggle.onclick = function() {
        body.classList.toggle('dark-theme'); // ugasena svjetla
    }
});

document.querySelectorAll('.read').forEach(button => {
    button.addEventListener('click', function() {
        const moreText = this.previousElementSibling; // Selects the .more span immediately preceding the button
        const dots = moreText.previousElementSibling; // Selects the .tacka span immediately before the .more span
        
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            button.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            button.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    });
});




