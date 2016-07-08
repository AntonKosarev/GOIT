// First slider
$(function() {
    var hwSlideSpeed = 700;
    var hwTimeOut = 3000;
    var hwNeedLinks = true;


    var $slide = $('.slide');
    var $slider = $('#slider');
    var $slidSLIDE = $("#slider .slide");
    var $conSlideActive = $(".control-slide .active");
    var $conSlide = $('.control-slide');
    var $sliderW = $('#slider-wrap');
    var nb = 'nextbutton';
    var pb = 'prewbutton';

    $(document).ready(function(e) {
       $slide.css(
            {"position" : "absolute",
                "top":'0', "left": '0'}).hide().eq(0).show();
        var slideNum = 0;
        var slideTime;
        slideCount = $slidSLIDE.size();
        var animSlide = function(arrow){
            clearTimeout(slideTime);
            $slide.eq(slideNum).fadeOut(hwSlideSpeed);
            if(arrow == "next"){
                if(slideNum == (slideCount-1)){slideNum=0;}
                else{slideNum++}
            }
            else if(arrow == "prew")
            {
                if(slideNum == 0){slideNum=slideCount-1;}
                else{slideNum-=1}
            }
            else{
                slideNum = arrow;
            }
            $slide.eq(slideNum).fadeIn(hwSlideSpeed, rotator);
            //$conSlideActive.removeClass("active");
            //$conSlide.eq(slideNum).addClass('active');
        };
        if(hwNeedLinks){
            var $linkArrow = $('<a id="' + pb + '"></a><a id="' + nb + '"></a>')
                .prependTo($slider);
var $nb = $('#nextbutton');
var $pb = $('#prewbutton');
            $nb.click(function(){
                animSlide("next");

            });
            $pb.click(function(){
                animSlide("prew");
            })
        }
        var pause = false;
        var rotator = function(){
            if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
        };
        $sliderW.hover(
            function(){clearTimeout(slideTime); pause = true;},
            function(){pause = false; rotator();
            });
        rotator();
    });
});

// Second slider
$(function() {
    var hwSlideSpeed = 700;
    var hwTimeOut = 3000;
    var hwNeedLinks = true;


    var $slide = $('.slide_1');
    var $slider = $('#slider_1');
    var $slidSLIDE = $("#slider_1 .slide_1");
    var $conSlideActive = $(".control-slide_1 .active_1");
    var $conSlide = $('.control-slide_1');
    var $sliderW = $('#slider-wrap_1');
    var nb = 'nextbutton_1';
    var pb = 'prewbutton_1';

    $(document).ready(function(e) {
        $slide.css(
            {"position" : "absolute",
                "top":'0', "left": '0'}).hide().eq(0).show();
        var slideNum = 0;
        var slideTime;
        slideCount = $slidSLIDE.size();
        var animSlide = function(arrow){
            clearTimeout(slideTime);
            $slide.eq(slideNum).fadeOut(hwSlideSpeed);
            if(arrow == "next"){
                if(slideNum == (slideCount-1)){slideNum=0;}
                else{slideNum++}
            }
            else if(arrow == "prew")
            {
                if(slideNum == 0){slideNum=slideCount-1;}
                else{slideNum-=1}
            }
            else{
                slideNum = arrow;
            }
            $slide.eq(slideNum).fadeIn(hwSlideSpeed, rotator);
            $conSlideActive.removeClass("active");
            $conSlide.eq(slideNum).addClass('active');
        };
        if(hwNeedLinks){
            var $linkArrow = $('<a id="' + pb + '"></a><a id="' + nb + '"></a>')
                .prependTo($slider);
            var $nb = $('#nextbutton_1');
            var $pb = $('#prewbutton_1');
            $nb.click(function(){
                animSlide("next");

            });
            $pb.click(function(){
                animSlide("prew");
            })
        }
        var pause = false;
        var rotator = function(){
            if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
        };
        $sliderW.hover(
            function(){clearTimeout(slideTime); pause = true;},
            function(){pause = false; rotator();
            });
        rotator();
    });
});
// Third slider
