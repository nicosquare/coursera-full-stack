$(document).ready(() => {

    $('#my-carousel').carousel({ interval: 2000 })
    $('#carousel-pause').click(() => {
        $('#my-carousel').carousel('pause');
    });
    $('#carousel-play').click(() => {
        $('#my-carousel').carousel('cycle');
    });

}); 