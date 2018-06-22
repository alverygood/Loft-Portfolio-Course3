const slider = document.querySelector('.js-slider');
const mainSlide = document.querySelector('.js-main-slide');
const upSlide = document.querySelector('.js-scroll-up');
const downSlide = document.querySelector('.js-scroll-down');
const description = document.querySelector('.js-description');
const slideLength = slides.length;
let currentSlide = 0;

function slideLimiter(value) {
    if (value >= slideLength) {
        return 0;
    } else if (value < 0) {
        return slideLength -1;
    } else {
        return value;
    }
}

const slides = ['oneslide', 'twoslide', 'threeslide', 'fourslide'];


//Some slide
var oneslide = document.querySelector('.working-slider__left');
var twoslide = document.querySelector('.working-slider__right-img');
var threeslide = document.querySelector('.working-slider__btn-left');
var fourslide = document.querySelector('.working-slider__btn-right');

function fillSlider() {
    let prev = slideLimiter(currentSlide - 1);
    let next = slideLimiter(currentSlide + 1);

    mainSlide = slides[currentSlide];
    upSlide = slides[prev];
    downSlide = slides[next];
    description = slides[currentSlide];
}

upSlide.addEventListener('click', function() {
    currentSlide = slideLimiter(currentSlide - 1);
    fillSlider();
});
