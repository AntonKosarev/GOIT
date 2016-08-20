//= partials/jquery.bxslider.js

$(document).ready(function(){
    $('.bxslider').bxSlider();
});

$(document).ready(function(){
    function getbg () {
        $('[data-slide-index = 0]').on('click', function () {
            $('body').css('background', '#6358c0');
        });
        $('[data-slide-index = 1]').on('click', function () {
            $('body').css('background', '#61acec');
        });
        $('[data-slide-index = 2]').on('click', function () {
            $('body').css('background', '#68a780');
        });
    }
    getbg();
});