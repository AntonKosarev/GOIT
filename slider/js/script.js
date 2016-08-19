/* Изменение размера шрифта пропорционально разеру лейаута
$(window).resize(function(){
    var text = $(".content_article h1"),
        currentWidth = parseInt(text.css("width")),
        newWidth = 85;

    if(currentWidth==1920) newWidth = 85;
    else if (currentWidth<1920 && currentWidth>=1820) newWidth = 80;
    else if (currentWidth<1820 && currentWidth>=1720) newWidth = 75;
    else if (currentWidth<1720 && currentWidth>=1620) newWidth = 70;
    else if (currentWidth<1620 && currentWidth>=1520) newWidth = 65;
    else if (currentWidth<1520 && currentWidth>=1420) newWidth = 60;
    else if (currentWidth<1320 && currentWidth>=1320) newWidth = 55;
    else if (currentWidth<1220 && currentWidth>=1220) newWidth = 50;
    else if (currentWidth<1120 && currentWidth>=1120) newWidth = 45;
    else if (currentWidth<1420 && currentWidth>=1020) newWidth = 40;
    else if (currentWidth<1420) newWidth = 35;

    text.css("font-size",newWidth+"px");
//}); */
//$(document).ready(function(){
//    var $slide1 = $('.slide1'),
//        $slide2 = $('.slide2'),
//        $slide3 = $('.slide3');
//
//    var $control1 = $('.controls_1'),
//        $control2 = $('.controls_2'),
//        $control3 = $('.controls_3');
//
//    $control2.on('click', function(e) {
//        e.preventDefault();
//        $slide1.css('display','none');
//        $slide2.css('display','block');
//    })
//});

$(document).ready(function(){
    $('.bxslider').bxSlider({
        mode: 'vertical',
        slideMargin: 3
    });
});

$(document).ready(function(){
    var $slide1 = $('[data-slide-index = "0"]'),
        $slide2 = $('[data-slide-index = "1"]'),
        $slide3 = $('[data-slide-index = "2"]');

    var $bg = $('.wrapper');

    $slide1.click(function(){
        $bg.css('background', '#6358c0');
    });

    $slide2.click(function(){
        $bg.css('background', '#61acec');
    });

    $slide3.click(function(){
        $bg.css('background', '#68a780');
    });

});




