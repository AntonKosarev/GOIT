'use strict';
$(function() {
    var html = $('#test').html();
    var test = [
        {
            question: 'Вопрос №1',
            answers: [
                {
                    text: 'Вариант ответа №1',
                    id: '0',
                    correct: false
                },
                {
                    text: 'Вариант ответа №2',
                    id: '1',
                    correct: true
                },
                {
                    text: 'Вариант ответа №3',
                    id: '2',
                    correct: false
                }
            ]
        },
        {
            question: 'Вопрос №2',
            answers: [
                {
                    text: 'Вариант ответа №1',
                    id: '3',
                    correct: false
                },
                {
                    text: 'Вариант ответа №2',
                    id: '4',
                    correct: true
                },
                {
                    text: 'Вариант ответа №3',
                    id: '5',
                    correct: false
                }
            ]
        },
        {
            question: 'Вопрос №3',
            answers: [
                {
                    text: 'Вариант ответа №1',
                    id: '6',
                    correct: false
                },
                {
                    text: 'Вариант ответа №2',
                    id: '7',
                    correct: true
                },
                {
                    text: 'Вариант ответа №3',
                    id: '8',
                    correct: false
                }
            ]
        }
    ];

    //LocalStorage
localStorage.setItem('test', JSON.stringify(test));
test = localStorage.getItem('test');
test = JSON.parse(test);

    var content = tmpl(html, {
        data: test
    });
    $('body').append(content);

    $('.button').on('click', function() {

        var $checkboxes = $('input:checked');

        //console.log('Выделенные чекбоксы $checkboxes: ', $checkboxes);

        var checkedAnswers = [];
        $checkboxes.each(function($link) {
            checkedAnswers.push($(this).attr('id'));
        });

        //checkedAnswers = [1, 4, 7]; //Правильные
        //console.log('Массив с значениями ID выделенных чекбоксов checkedAnswers: ', checkedAnswers);

        var allAnswers = [];
        for (var i=0; i<test.length; i++) {
            allAnswers = allAnswers.concat(test[i].answers);
        }

        //console.log('Массив со всеми вопросами allAnswers',allAnswers);

        var testSuccessful = true;
        var totalCorrectAnswers = 0;
        for (i=0; i<allAnswers.length; i++) {

            if (allAnswers[i].correct) {
                totalCorrectAnswers++;
                //console.log('количество верных ответов totalCorrectAnswers',totalCorrectAnswers);
                if (checkedAnswers.indexOf(allAnswers[i].id) === -1) {
                    alert('Test NOT successful.');
                    testSuccessful = false;
                    return testSuccessful;
                }

                if (totalCorrectAnswers == checkedAnswers.length) {
                    alert('Test successful!');
                }
            }
        }
    });


});