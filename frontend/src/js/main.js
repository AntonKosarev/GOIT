//= partials/jquery.bxslider.js
//= partials/jquery.tab.js
var k=0;
$(document).ready(function(){
    $('.bxslider').bxSlider();
});

$(document).ready(function(){

    var mod = {
        submenu: $('.submenu'),
        subopen: $('#openmenu'),
        subclose: $('#closemenu'),
        plus: $('#dropdat'),
        plusdiv: $('#drop'),
        plushtml: "<img src='img/plus.png' alt='+'>",
        minushtml: "<img src='img/minus.png' alt='-'>",
        dropmenu: $('.drop_menu')
    };

    function openSub(click) {
        mod.submenu.animate({
            height: '140px'
        }, 500);
        $(click).attr("class", "up");
        click.innerHTML = mod.minushtml;
    }
    function closeSub(click){
        mod.submenu.animate({
            height: '0'
        }, 500);
        $(click).attr("class", "drop");
        click.innerHTML = mod.plushtml;
    }

    mod.subopen.on('tap', function(e) {
        e.preventDefault();
        mod.dropmenu.animate({width:'toggle'}, 500);
    });

    mod.subclose.on('tap', function(e) {
        e.preventDefault();
        closeSub(mod.plusdiv);
        mod.dropmenu.animate({width:'toggle'}, 500);
    });

    mod.plus.on('tap', function (e) {
        e.preventDefault();
        var $class = mod.plusdiv.attr("class");
        if ($class == 'drop') {
            openSub(mod.plusdiv);
        }else if ($class == 'up') {
            closeSub(mod.plusdiv);
        }
    });
});