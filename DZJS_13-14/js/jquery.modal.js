(function($){
    $.fn.fancybox = function(frase){//options - передаваемые опции
        var $link = this;
        var $body = $('body');
        var $overlay;
        var $modal;
        function showModal(e) {
            $modal = $('<div class="modal"><p class="frase">' + frase + '"</p></div>');
            $(".frase").innerHTML = frase;
            $overlay = $('<div class="overlay"></div>');
            $button = $('<button type="button" class="modal-button">Close</button>');
            e.preventDefault();
            $body.append($overlay);
            $body.append($modal);
            $modal.append($button);
            $button.one('click', hideModal);
        }
        function hideModal() {
            $modal.remove();
            $overlay.remove();
        }
        $link.on('click', showModal);
        return this;
    }
})(jQuery);