var swiper = new Swiper(".mySwiper", {
    autoplay: true,
    autoplayspeed: 1000,
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
})

jQuery(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            '576': {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            '768': {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            '992': {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            '1300': {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
        // Optional parameters   
        freeMode: true,
        loop: false,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    })

});