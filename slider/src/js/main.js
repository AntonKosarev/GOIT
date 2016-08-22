//= partials/jquery.bxslider.js
var k=0;
$(document).ready(function(){
    $('.bxslider').bxSlider();
});

$(function(){
    function openSub(click) {
        $('.submenu').animate({
            height: '140px'
        }, 1000);
        $(click).attr("class", "up");
        click.innerHTML = "<img src='img/minus.png' alt='-'>";
    }
    function closeSub(click){
        $('.submenu').animate({
            height: '0'
        }, 1000);
        $(click).attr("class", "drop");
        click.innerHTML = "<img src='img/plus.png' alt='+'>"
        console.log(click.innerHTML);
    }

    $('#openmenu').on('click', function(e) {
        e.preventDefault();
        $('.drop_menu').animate({
            width: '540px'
        }, 1000);
    });

    $('#closemenu').on('click', function(e) {
        e.preventDefault();
        $('.drop_menu').animate({
            width: 0
        }, 1000);
        closeSub($('#drop'));
    });

    $('#drop').on('click', function (e) {
        e.preventDefault();
        var $class = $(this).attr("class");
        if ($class == 'drop') {
            openSub(this);
        }else if ($class == 'up') {
            closeSub(this);
        }
    });
});