$(document).ready(() => {

    const myCarousel = $('#my-carousel');
    const carouselButton = $('#carousel-button');

    myCarousel.carousel({ interval: 1000 })

    carouselButton.click(() => {

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

});