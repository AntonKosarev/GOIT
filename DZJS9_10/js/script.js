//jCourusel
$(function() {
    $('.jcarousel').jcarousel({
        animation: 'slow'
    });

    $('.jcarousel-prev').click(function() {
        $('.jcarousel').jcarousel('scroll', '-=1');
    });

    $('.jcarousel-next').click(function() {
        $('.jcarousel').jcarousel('scroll', '+=1');
    });
});

$("select").selectbox();


