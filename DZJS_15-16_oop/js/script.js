/* 1. Создать класс Human, у которого будут свойства обычного
 человека: имя, возраст, пол, рост, вес.
 Используя прототипное наследование создать дочерние классы
 Worker (дописать в них поля места работы, зарплатой, методом "работать")
 и Student (дописать поля места учебы, стипендией, методом "смотреть сериалы")

 2. Создать несколько экземпляров классов Worker и Student,
 вывести их в консоль. Убедиться что они имеют поля родительского класса Human
 */
'use strict';
function Human() {
    this.name = 'имя';
    this.age = 'возраст';
    this.gender = 'пол';
    this.height = 'рост';
    this.weight = 'вес';
}

function Worker() {
    this.workplace = 'место работы';
    this.salary = 'зарплата';
    this.work = function() {
        console.log('работать');
    }
}

function Student() {
    this.studyplase = 'место учебы';
    this.grants = 'стипендия';
    this.lookingshow = function() {
        console.log('смотреть сериалы');
    }
}

var newHuman = new Human();
Worker.prototype = newHuman;
Student.prototype = newHuman;

var newWorker = new Worker;
var newStudent = new Student;

console.log('newWorker: ', newWorker);
console.log('newStudent: ', newStudent);