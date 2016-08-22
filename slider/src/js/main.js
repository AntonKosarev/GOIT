//= partials/jquery.bxslider.js

$(document).ready(function(){
    $('.bxslider').bxSlider();
});

$(function(){
    //function getbg() {
    //    $('[data-slide-index = 0]').on('click', function () {
    //        $('body').css('background', '#6358c0');
    //    });
    //    $('[data-slide-index = 1]').on('click', function () {
    //        $('body').css('background', '#61acec');
    //    });
    //    $('[data-slide-index = 2]').on('click', function () {
    //        $('body').css('background', '#68a780');
    //    });
    //}
    //getbg();
    var a1 = $('[data-slide-index = 0]');
    var a2 = $('[data-slide-index = 1]');
    var a3 = $('[data-slide-index = 2]');
    console.log('a1', a1);
    console.log('a2', a2);
    console.log('a3', a3);




    function getmenu () {
        $('#openmenu').on('click', function(e) {
            e.preventDefault();
            $('.drop_menu').css('display', 'block');
        });
        $('#closemenu').on('click', function(e) {
            e.preventDefault();
            $('.drop_menu').css('display', 'none');
        });
    }
    getmenu();
});