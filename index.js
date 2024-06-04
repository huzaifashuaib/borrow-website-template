
var carouselWidth = $('#carousel-inner2')[0].scrollWidth;
var cardWidth = $('#carousel-item2').width();

var scrollPosition = 0;
$('.carousel-control-next').on('click', function () {
    if (scrollPosition < (carouselWidth - (cardWidth * 4))) {

        console.log('next');
        scrollPosition = scrollPosition + cardWidth;
        $('#carousel-inner2').animate({ scrollLeft: scrollPosition },
            600)
    }
})

$('.carousel-control-prev').on('click', function () {
    if (scrollPosition > 0) {

        console.log('prev');
        scrollPosition = scrollPosition - cardWidth;
        $('#carousel-inner2').animate({ scrollLeft: scrollPosition },
            600)
    }
})




//  second Slider
var carouselWidth1 = $('#carousel-inner3')[0].scrollWidth;
var cardWidth1 = $('#carousel-item3').width();

var scrollPosition1 = 0;
$('.carousel-control-next').on('click', function () {
    if (scrollPosition1 < (carouselWidth1 - (cardWidth1 * 4))) {

        console.log('next');
        scrollPosition1 = scrollPosition1 + cardWidth1;
        $('#carousel-inner3').animate({ scrollLeft: scrollPosition1 },
            600)
    }
})

$('.carousel-control-prev').on('click', function () {
    if (scrollPosition1 > 0) {

        console.log('prev');
        scrollPosition1 = scrollPosition1 - cardWidth1;
        $('#carousel-inner3').animate({ scrollLeft: scrollPosition1 },
            600)
    }
})