

/* Галлерея */
$(function() {
    var jssor_1_SlideshowTransitions = [
        {
            $Duration: 1200,
            x: 0.3,
            $During: {$Left: [0.3, 0.7]},
            $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            x: -0.3,
            $SlideOut: true,
            $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            x: -0.3,
            $During: {$Left: [0.3, 0.7]},
            $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            x: 0.3,
            $SlideOut: true,
            $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            y: 0.3,
            $During: {$Top: [0.3, 0.7]},
            $Easing: {$Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            y: -0.3,
            $SlideOut: true,
            $Easing: {$Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            y: -0.3,
            $During: {$Top: [0.3, 0.7]},
            $Easing: {$Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            y: 0.3,
            $SlideOut: true,
            $Easing: {$Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            x: 0.3,
            $Cols: 2,
            $During: {$Left: [0.3, 0.7]},
            $ChessMode: {$Column: 3},
            $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            x: 0.3,
            $Cols: 2,
            $SlideOut: true,
            $ChessMode: {$Column: 3},
            $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            y: 0.3,
            $Rows: 2,
            $During: {$Top: [0.3, 0.7]},
            $ChessMode: {$Row: 12},
            $Easing: {$Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            y: 0.3,
            $Rows: 2,
            $SlideOut: true,
            $ChessMode: {$Row: 12},
            $Easing: {$Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            y: 0.3,
            $Cols: 2,
            $During: {$Top: [0.3, 0.7]},
            $ChessMode: {$Column: 12},
            $Easing: {$Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            y: -0.3,
            $Cols: 2,
            $SlideOut: true,
            $ChessMode: {$Column: 12},
            $Easing: {$Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            x: 0.3,
            $Rows: 2,
            $During: {$Left: [0.3, 0.7]},
            $ChessMode: {$Row: 3},
            $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            x: -0.3,
            $Rows: 2,
            $SlideOut: true,
            $ChessMode: {$Row: 3},
            $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            x: 0.3,
            y: 0.3,
            $Cols: 2,
            $Rows: 2,
            $During: {$Left: [0.3, 0.7], $Top: [0.3, 0.7]},
            $ChessMode: {$Column: 3, $Row: 12},
            $Easing: {$Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            x: 0.3,
            y: 0.3,
            $Cols: 2,
            $Rows: 2,
            $During: {$Left: [0.3, 0.7], $Top: [0.3, 0.7]},
            $SlideOut: true,
            $ChessMode: {$Column: 3, $Row: 12},
            $Easing: {$Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            $Delay: 20,
            $Clip: 3,
            $Assembly: 260,
            $Easing: {$Clip: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            $Delay: 20,
            $Clip: 3,
            $SlideOut: true,
            $Assembly: 260,
            $Easing: {$Clip: $Jease$.$OutCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            $Delay: 20,
            $Clip: 12,
            $Assembly: 260,
            $Easing: {$Clip: $Jease$.$InCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        },
        {
            $Duration: 1200,
            $Delay: 20,
            $Clip: 12,
            $SlideOut: true,
            $Assembly: 260,
            $Easing: {$Clip: $Jease$.$OutCubic, $Opacity: $Jease$.$Linear},
            $Opacity: 2
        }
    ];
    var jssor_1_options = {
        $AutoPlay: false, /* Автопрокрутка галереи*/
        $SlideshowOptions: {
            $Class: $JssorSlideshowRunner$,
            $Transitions: jssor_1_SlideshowTransitions,
            $TransitionsOrder: 1
        },
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $ThumbnailNavigatorOptions: {
            $Class: $JssorThumbnailNavigator$,
            $Cols: 4, /* кличество слайдов */
            $SpacingX: 7, /* расстояние между слайдами */
            $SpacingY: 15,
            $Align: 360 /* Выравниваниеслайдов */
        }
    };
    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
    /*responsive code begin*/
    /*you can remove responsive code if you don't want the slider scales while window resizing*/
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 336);
            /* Ширина галереи */
            jssor_1_slider.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider)
});
    /*responsive code end*/
    /* end Галерея */

    /* Карусель Автор http://www.gmarwaha.com/jquery/jcarousellite/*/
$(function() {
        $(".carousel-list").jCarouselLite({
            btnNext: ".carousel .next",
            btnPrev: ".carousel .prev",
            visible: 4,
            circular: false
        });
    /* end Карусель Автор */
});

    /* Полагин для Карусель Похожие Логотипы */
$(function() {
    function getCarouselForSimilarLogo() {
        $(".carousel__similar-list").jCarouselLite({
            btnNext: ".carousel__similar .next",
            btnPrev: ".carousel__similar .prev",
            visible: 4,
            auto: 3000,
            speed: 400
        });
    }
    /* end Полагин для Карусель Похожие Логотипы */
    /* Постороение карусели Похожие Логотипы при помощи шаблонизатора Джона Резика */
    var similarLogos = [
        {
            img: "img/similar01.jpg",
            price: 500,
            title: "Sport tender"
        },
        {
            img: "img/similar01.jpg",
            price: 500,
            title: "Sport tender"
        },
        {
            img: "img/similar02.jpg",
            price: 299,
            title: "Транспортная компания ПТС"
        },
        {
            img: "img/similar03.jpg",
            price: 299,
            title: "Транспортная компания ПТС"
        },
        {
            img: "img/similar01.jpg",
            price: 500,
            title: "Sport tender"
        },
        {
            img: "img/similar01.jpg",
            price: 500,
            title: "Sport tender"
        },
        {
            img: "img/similar02.jpg",
            price: 299,
            title: "Транспортная компания ПТС"
        },
        {
            img: "img/similar03.jpg",
            price: 299,
            title: "Транспортная компания ПТС"
        }
    ];

    var $button = {
        buy: $('#buy'),
        change: $('#change')
    };

    function getRezic(images) {
        var html = $('#similarlogos').html();
        var content = tmpl(html, {
            data: images
        });
        $('.changeitems').append(content);
    }

    getRezic(similarLogos);
    getCarouselForSimilarLogo();
    /* события ajax */

    /* Купить */
    function getBuy(e) {
        e.preventDefault();
        $.ajax({
            url: "buy.json",
        }).done(function (data) {
            alert(data.message);
        });
    }
    $button.buy.on('click', getBuy);
    /* end Купить */

    /* Изменить */
    function getChange(e) {
        e.preventDefault();
        $.ajax({
            url: "load-logos.json"
        }).done(function (data) {
            var newSimilarLogos = [];
            for (var i = 0; i<similarLogos.length; i++) {
                newSimilarLogos.push(similarLogos[i]);
            }
            for (var k = (data.data.length-1); k>-1; k--) {
                newSimilarLogos.unshift(data.data[k]);
            }
            $('.changeitems').html('');
            getRezic(newSimilarLogos);
            getCarouselForSimilarLogo();
            alert(data.message);
        });
    }
    $button.change.on('click', getChange);
    /* end Изменить */
    /* end события ajax */
});

