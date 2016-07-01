$(function(){

    var $panel1 = $('#panel1'),
        $panel2 = $('#panel2'),
        $panel3 = $('#panel3'),
        $panel4 = $('#panel4');

    var $text1 = $('#text1'),
        $text2 = $('#text2'),
        $text3 = $('#text3'),
        $text4 = $('#text4');

    var $plus1 = $('#plus1'),
        $plus2 = $('#plus2'),
        $plus3 = $('#plus3'),
        $plus4 = $('#plus4');

    var $head1 = $('#head1'),
        $head2 = $('#head2'),
        $head3 = $('#head3'),
        $head4 = $('#head4');

    var $head1v = $('#head1v'),
        $head2v = $('#head2v'),
        $head3v = $('#head3v'),
        $head4v = $('#head4v');

    var $plus1v = $('#plus1v'),
        $plus2v = $('#plus2v'),
        $plus3v = $('#plus3v'),
        $plus4v = $('#plus4v');

    var $panel_1 = [
        $plus1,
        $head1,
        $head1v,
        $plus1v
    ];
    var $panel_2 = [
        $plus2,
        $head2,
        $head2v,
        $plus2v
    ];
    var $panel_3 = [
        $plus3,
        $head3,
        $head3v,
        $plus3v
    ];
    var $panel_4 = [
        $plus4,
        $head4,
        $head4v,
        $plus4v
    ];


    $panel1.on('click', function(){
        for (var i= 0;i<$panel_1.length;i++){
        $panel_1[i].toggle();
        }
        $text1.slideToggle();
    });

    $panel2.on('click', function(){
        for (var i= 0;i<$panel_2.length;i++){
            $panel_2[i].toggle();
        }
        $text2.slideToggle();
    });

    $panel3.on('click', function(){
        for (var i= 0;i<$panel_3.length;i++){
            $panel_3[i].toggle();
        }
        $text3.slideToggle();
    });

    $panel4.on('click', function(){
        for (var i= 0;i<$panel_4.length;i++){
            $panel_4[i].toggle();
        }
        $text4.slideToggle();
    });

});
