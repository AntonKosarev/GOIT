(function($){
    jQuery.fn.lightTabs = function(){

        var createTabs = function(){
            var tabs = this;
            var i = 0;

            var showPage = function(i){
                $(tabs).children("div").children("div").hide();
                //Без параметров, метод .hide () это самый простой способ скрыть элемент:
                $(tabs).children("div").children("div").eq(i).show();
                //eq - выбирает элемент по номеру
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            };

            showPage(0);

            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;
            });

            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });
        };
        return this.each(createTabs);
    };

    // Подключение плагина
    $(document).ready(function(){
        $(".tabs").lightTabs();
    });
})(jQuery);

// Form
$(function() {

    var $help = $('.help');
    var $buttonHelp = $('.showHelp');
    var $input = $('input');

        $help.hide();

    $buttonHelp.on('click', function() {
        $help.show();
    });

    $input.eq(0).on('mouseout', function(){
      $help.eq(0).slideToggle();
    });
    $input.eq(1).on('mouseout', function(){
        $help.eq(1).slideToggle();
    });
    $input.eq(2).on('mouseout', function(){
        $help.eq(2).slideToggle();
    });

});