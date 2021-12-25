// window.addEventListener('DOMContentLoaded', (event) => {

const objectSlider = new Swiper(".object__slider", {
    speed: 500,
    loop: true,
    effect: "fade",

    slidesPerView: 1,

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

// });
