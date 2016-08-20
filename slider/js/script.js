$(function(){
    $('.bxslider').bxSlider({
        mode: 'vertical',
        slideMargin: 3
    });
});

$(function(){

    var $slide1 = $('[data-slide-index = 0]'),
        $slide2 = $('[data-slide-index = 1]'),
        $slide3 = $('[data-slide-index = 2]');

    var $bg = $('.wrapper');

    $slide1.on('click', function(){
        $bg.css('background', '#6358c0');
    });

    $slide2.on('click', function(){
        $bg.css('background', '#61acec');
    });

    $slide3.on('click', function(){
        $bg.css('background', '#68a780');
    });
});




