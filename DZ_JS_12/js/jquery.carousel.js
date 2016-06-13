(function($){
    $.fn.carousel = function(options){

        var defaults = {
            carouselWidth: '600px',
            carouselViewImg: '5'
        };

        var settings = $.extend(defaults, options);

        var leftUIEl = $('.arrow-left');
        var rightUIEl = $('.arrow-right');
        var elementsList = $('.carousel-list');
        var $carouselHider = $('.carousel-hider');

        $carouselHider.css({
            'width': 'settings.couruselWidth'
        });

        var pixelsOffset = 125;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = - ((elementsCount - settings.carousel) * pixelsOffset);
        var maximumOffset = 0;

        leftUIEl.click(function() {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += 125;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }
        });

        rightUIEl.click(function() {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 125;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }
        });
        return this;
    }
})(jQuery);
