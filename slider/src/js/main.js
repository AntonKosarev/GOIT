//= partials/jquery.bxslider.js
var k=0;
$(document).ready(function(){
    $('.bxslider').bxSlider();
});

$(function(){

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
    });

    $('#drop').on('click', function (e) {
        e.preventDefault();
        var $class = $(this).attr("class");
        if ($class == 'drop') {
            $('.submenu').animate({
                height: '140px'
            }, 1000);
            $(this).attr("class", "up");
            this.innerHTML = "<img src='img/minus.png' alt='-'>";
        }else if ($class == 'up') {
            $('.submenu').animate({
                height: '0'
            }, 1000);
            $(this).attr("class", "drop");
            this.innerHTML = "<img src='img/plus.png' alt='-'>";
        }
    });
});