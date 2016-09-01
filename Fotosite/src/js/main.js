//= partials/jquery-1.12.4.js
//= partials/jquery.bxslider.js
//= partials/jquery.tab.js

$(document).ready(function(){
    $('.bxslider').bxSlider();
});

$(document).ready(function(){

    var $mod = {
        submenu: $('.submenu'),
        subopen: $('#openmenu'),
        subclose: $('#closemenu'),
        plusdiv: $('#drop'),
        dropmenu: $('.drop_menu'),
        plushtml: function() {
            this.plusdiv.html("<img src='img/plus.png' alt='+'>");
        },
        minushtml: function() {
            this.plusdiv.html("<img src='img/minus.png' alt='-'>");
        }
    };

    function openSub() {
        $mod.submenu.animate({
            height: '140px'
        }, 400);
        $mod.plusdiv.attr("class", "up");
        $mod.minushtml();
    }

    function closeSub(){
        $mod.submenu.animate({
            height: '0'
        }, 400);
        $mod.plusdiv.attr("class", "drop");
        $mod.plushtml();
    }

    $mod.subopen.on('tap', function() {
        $mod.dropmenu.animate({width:'toggle'}, 400);
    });

    $mod.subclose.on('tap', function() {
        closeSub();
        $mod.dropmenu.animate({width:'toggle'}, 400);
    });

    $mod.plusdiv.on('tap', function () {
        var klass = this.getAttribute('class');
        if (klass == 'drop') {
            openSub();
        }else if (klass == 'up') {
            closeSub();
        }
    });
});