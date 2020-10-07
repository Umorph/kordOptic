$(document).ready(function(){
    $('.slider-offer__slider').slick({
        arrows:true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    });

    $('.slider-package__slider').slick({
        arrows: true,
        infinite: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: false
              }
            }
        ],
    });
});