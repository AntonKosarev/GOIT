
$(function(){

    //var text = 'yellow flowers';
    var $button = $('#button');
    var $input;
    function getSearch(e) {
        e.preventDefault();
        console.log($('.searchcontent'));
        $('.searchList').html('');
        $input = $("#search")[0].value;
        $.ajax({
            url: 'https://pixabay.com/api/?key=2764229-c5184a27330ccf1853daf3552&q='
                 + $input + '&image_type=photo',
            dataType: 'jsonp',
            lang: 'ru'
        }).done(function (data) {
            var html = $('#test').html();
            var resultSearch = data.hits;
            var content = tmpl(html, {
                data: resultSearch
            });
            $('.searchcontent').append(content);
            console.log(resultSearch)
        });
    }
    $button.on('click', getSearch);


});