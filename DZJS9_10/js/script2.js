// Checkbox
$(function() {
// Отслеживаем событие клика по диву с классом check
    $('.checkboxes').on('click','.check', function(){
        $(this).toggleClass('active');
        $(this).find('.check_inner_img').toggleClass('check_inner_img__active');
        var $input = $(this).find('input');
        // Пишем условие: если вложенный в див чекбокс отмечен
        if( $input[0].checked) {
            // и удаляем атрибут checked (делаем чекбокс не отмеченным)
            $input.prop('checked', false);
        } else {
            // добавляем атрибут checked чекбоксу
            $input.prop('checked', true) ;
        }
    });
});

//Menu
//$(function() {
//    var $links = $('.menu a');
//    $links.on('mouseover', function(e) {
//        var $submenu = $(this).siblings('.submenu');
//        e.preventDefault();
//        $submenu.slideToggle();
//    });
//});

//$(document).ready(function(){
//    var $links = $('.menu a');
//    $links.on('click', function(e){
//        e.preventDefault();
//    });
//    $links.hover(function () {
//        clearTimeout($.data(this,'timer'));
//        var $submenu = $(this).siblings('.submenu');
//        $submenu.stop(true,true).slideDown(200);
//    }, function () {
//        $.data(this,'timer', setTimeout($.proxy(function() {
//            $('ul', this).stop(true,true).slideUp(200);
//        }, this), 100));
//        console.log($('ul',this));
//        console.log($('.submenu-1'));
//    });
//});

$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.submenu').slideDown(200);
        },
        function(){
            $(this).children('.submenu').slideUp(200);
        }
    );
}); // end ready