$(document).ready(function () {

    $('.slick-slider').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        auto: true,
        controls: false
    });

    $(".explore-button").hover(function () {
        $(this).parent().addClass("hovered-card");
    }, function () {
        $(this).parent().removeClass("hovered-card");
    }
    );

});