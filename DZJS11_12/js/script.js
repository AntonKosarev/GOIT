
// plagin
$(function() {
    $('.arrow').carousel({
        carouselWidth: '350px',
        carouselViewImg: '3'
    });
});

// template
$(function() {
    var html = $('#test').html();
    var articles = [
        {
            fullName: 'Косарев Антон Павлович',
            specialization: 'Фронтенд разработчик',
            whyThatSpeccialization: 'Хочу учить фронтенд, потому что:',
            whyThatSpeccializationContent: [
                'Это интересно',
                'Имею связанную детскую мечту',
                'Хорошо платят'
            ],
            phone: 'Мой контактныйтелефон',
            phoneNamber:  '+380666272783',
            facebook: 'Мойпрофиль в фейсбуке',
            facebookLink: 'https://www.facebook.com/profile.php?id=100011119297055',
            facebookViewLink: 'facebook.com',
            feedback: 'Мой фидбек:',
            feedbackLink: 'Верстка сайтов'
        }
    ];
    var content = tmpl(html, {
        data: articles
    });
    $('body').append(content);
});
