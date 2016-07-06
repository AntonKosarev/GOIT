'use strict';
$(function() {
    let html = $('#test').html();
    let test = [
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

    let content = tmpl(html, {
        data: test
    });
    $('body').append(content);

    function getModal(frase = "Не верно") {
        let $body = $('body');
        let $modal = $('<div class="modal">' +
            '<p class="frase">' + frase + '</p>' +
            '<button type="button" class="modal-button">Close</button>' +
            '</div>');
        let $overlay = $('<div class="overlay"></div>');
        $body.append($overlay);
        $body.append($modal);

        $('.modal-button').one('click', closeModal);

        function closeModal(){
            $('input').prop('checked', false);
            $modal.remove();
            $overlay.remove();
        }
    }

    $('.button').on('click', function(e) {
        e.preventDefault();

        let $checkboxes = $('input:checked');

        //console.log('Выделенные чекбоксы $checkboxes: ', $checkboxes);

        let checkedAnswers = [];
        $checkboxes.each(function() {
            checkedAnswers.push($(this).attr('id'));
        });
        //checkedAnswers = [1, 4, 7]; //Правильные
        //console.log('Массив с значениями ID выделенных чекбоксов checkedAnswers: ', checkedAnswers);

        let allAnswers = [];
        //for (var i=0; i<test.length; i++) {
        for (let value for test) {
            allAnswers = allAnswers.concat(test[value].answers);
        }

        //console.log('Массив со всеми вопросами allAnswers',allAnswers);

        var testSuccessful;
        var totalCorrectAnswers = 0;

        console.log('checked answers: ', checkedAnswers.length);

        for (let value for allAnswers) {
            //console.log('i: ', i);
            if (allAnswers[value].correct) {
                totalCorrectAnswers++;
                if (checkedAnswers.indexOf(allAnswers[value].id) === -1) {
                    getModal('Test NOT successful.');
                    testSuccessful = false;
                    return testSuccessful;
                }
            }
            console.log('true answers: ', totalCorrectAnswers);
        }

        if (totalCorrectAnswers < checkedAnswers.length) {
            getModal('You get too many answers, test NOT successful.');
            testSuccessful = false;
            return testSuccessful;
        } else {
            getModal('Test successful!');
            testSuccessful = true;
            return testSuccessful;
        }
    });


});