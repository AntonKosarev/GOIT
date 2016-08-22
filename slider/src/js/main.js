//= partials/jquery.bxslider.js

$(document).ready(function(){
    $('.bxslider').bxSlider();
});

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
    //var a = $('.bx-pager-link');

$(document).ready(function() {
    //var $a = $('div.bx-pager-item');
    //var $a1 = $('[data-slide-index = 0]');
    //var $a2 = $('[data-slide-index = 1]');
    //var $a3 = $('[data-slide-index = 2]');
    //var $bg = $('body');
    //console.log('bg: ', $bg);
    //console.log('$a: ', $a);
    //console.log('$a: ', $a);
    //$a1.click(function(){
    //    $bg.css('background', '#6358c0');
    //    console.log('a1: ', $a1);
    //});
    //$a.click(function(){
    //    $bg.css('background', '#61acec');
    //    console.log('a2: ', $a2);
    //});
    //$a3.click(function(){
    //    $bg.css('background', '#68a780');
    //    console.log('a3: ', $a3);
    //});

    var color = {
        s1: '#6358c0',
        s2: '#61acec',
        s3: '#68a780'
    };
});





$(function(){
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