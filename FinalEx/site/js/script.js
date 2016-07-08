
var hwSlideSpeed = 700;
var hwTimeOut = 3000;
var hwNeedLinks = true;

$(document).ready(function(e) {
    $('.slide').css(
        {"position" : "absolute",
            "top":'0', "left": '0'}).hide().eq(0).show();
    var slideNum = 0;
    var slideTime;
    slideCount = [
        $("#slider .slide").size(),
        $("#slider_1 .slide").size(),
        $("#slider_2 .slide").size()
        ];

    var animSlide = function(arrow){
        clearTimeout(slideTime);
        $('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
        for (var i=0; i<slideCount.length; i++) {
            if (arrow == "next") {
                if (slideNum == (slideCount[i] - 1)) {
                    slideNum = 0;
                } else {
                    slideNum++
                }
            } else if (arrow == "prew") {
                if (slideNum == 0) {
                    slideNum = slideCount[i] - 1;
                } else {
                    slideNum -= 1
                }
            } else {
                slideNum = arrow
            }
        }

        $('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
        $(".control-slide.active").removeClass("active");
        $('.control-slide').eq(slideNum).addClass('active');
    };
    if(hwNeedLinks){
        var $linkArrow = [
            $('<a id="prewbutton"></a><a id="nextbutton"></a>').prependTo('#slider'),
            $('<a id="prewbutton_1"></a><a id="nextbutton_1"></a>').prependTo('#slider_1'),
            $('<a id="prewbutton_2"></a><a id="nextbutton_2"></a>').prependTo('#slider_2')
            ];
        $('#nextbutton').click(function(){animSlide("next");});
        $('#nextbutton_1').click(function(){animSlide("next");});
        $('#nextbutton_2').click(function(){animSlide("next");});
        $('#prewbutton').click(function(){animSlide("prew");});
        $('#prewbutton_1').click(function(){animSlide("prew");});
        $('#prewbutton_2').click(function(){animSlide("prew");});
    }
    var pause = false;
    var rotator = function(){
        if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
    };
    $sliderWrap = [
        $('#slider-wrap'),
        $('#slider-wrap_1'),
        $('#slider-wrap_2')
    ];
    for (var k=0; k<slideCount.length; k++) {
        $sliderWrap[k].hover(
            function () {
                clearTimeout(slideTime);
                pause = true;
            },
            function () {
                pause = false;
                rotator();
            });
    }
    rotator();
});