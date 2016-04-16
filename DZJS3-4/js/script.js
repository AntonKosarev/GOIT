var body = document.getElementsByTagName('body')[0];
var test = document.createElement('div');
var form = document.createElement('form');
    form.innerHTML = '<h3 class="header">Тест по программированию</h3>';
    form.setAttribute('class', 'js-form');
    form.setAttribute('id', 'formSubmit');
    form.setAttribute('action', '#');
var button = document.createElement('button');
    button.innerHTML = 'Проверить мои результаты';
    button.setAttribute('type', 'submit');
    button.setAttribute('class', 'button');
    button.setAttribute('form', 'formSubmit');
var question = {
        text : 'Вопрос №',
        answers: [
            {text : 'Вариант ответа №1',
                correct : true},
            {text : 'Вариант ответа №2',
                correct : true},
            {text : 'Вариант ответа №3',
                correct : true}
        ],
        getQuestion: function(n) {
            var list = '';
            for (var i = 0; i < this.answers.length; i++) {
                list += '<li class="menu__item"><label class="label"><input type="checkbox">' + this.answers[i].text + '</label></li>';
            }
            return '<h4>' + this.text + n + '</h4><ul>' + list + '</ul>';
        }
    };
body.appendChild(test);
test.appendChild(form);
test.appendChild(button);

console.log('button', button);

for(var i = 1; i < 4; i++) {
    form.innerHTML = form.innerHTML + question.getQuestion(i);
}
//  Не знаю как вставить функцию getAttributeToInput в методы question, поэтому вынес в конец
var getAttributeToInput = function() {
    var tagInput = document.getElementsByTagName ('input');
    for (i = 0; i < tagInput.length; i++) {
        tagInput[i].setAttribute('name', 'answer' + (i+1));
    }
    return tagInput;
};
getAttributeToInput();

for (var a = 0; a < document.body.children.length; a++) {
    console.log('document.body.children', document.body.children[a]); // DIV, UL, DIV, SCRIPT
}
