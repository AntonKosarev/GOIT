//= partials/jquery.bxslider.js

$(document).ready(function(){
    $('.bxslider').bxSlider();
});

//$('#openmenu').click(function() {
//    $('.drop_menu').animate({
//        display: 'block'
//        //right: '0'
//    }, 1000);
//});

$(function(){
    function getmenu () {
        $('#openmenu').on('click', function(e) {
            e.preventDefault();
            $('.drop_menu').animate({
                width: '540px'
                //right: '0'
            }, 1000);
            //css('display', 'block');
        });
        $('#closemenu').on('click', function(e) {
            e.preventDefault();
            $('.drop_menu').animate({
                width: 0
                //right: '0'
            }, 1000);
            //css('display', 'block');
            //$('.drop_menu').css('display', 'none');
        });
    }
    getmenu();
});