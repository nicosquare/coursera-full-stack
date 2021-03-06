$(document).ready(function () {

    const myCarousel = $('#my-carousel');
    const carouselButton = $('#carousel-button');

    myCarousel.carousel({ interval: 1000 })

    carouselButton.click(function() {

        if (carouselButton.children('span').hasClass('fa-pause')) {
            myCarousel.carousel('pause');
            carouselButton.children('span').removeClass('fa-pause');
            carouselButton.children('span').addClass('fa-play');
        } else {
            myCarousel.carousel('cycle');
            carouselButton.children('span').removeClass('fa-play');
            carouselButton.children('span').addClass('fa-pause');
        }

    });

    // Handle login modal

    const loginButton = $('#login-button');
    const loginModal = $('#login-modal');

    loginButton.click(function () {

        loginModal.modal('show');

    })

    // Handle reserve modal

    const reserveButton = $('#reserve-button');
    const reserveModal = $('#reservation-modal');

    reserveButton.click(function () {

        reserveModal.modal('show');

    })

});