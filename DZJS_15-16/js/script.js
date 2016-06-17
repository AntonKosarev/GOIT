$(function(){

    window.pixabayCallback = function (data) {
        var ul = document.createElement("ul");
        $.each(data.results, function(i, val){
            var li = document.createElement("li");
            li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;
            ul.appendChild(li);
        });
        $('.wrapper').html(ul);
    };

    $.ajax({
        url: 'http://pixabay.com/api',
        metod: 'GET',
        dataType: 'jsonp',
        data: {
            key: '2764229-c5184a27330ccf1853daf3552',
            q: 'foto',//$('.search').val(),
            callback: pixabayCallback
        }
    });


});


