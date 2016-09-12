var jsonTasks = {
    "tasks": [
{ "name": "Задача 2", "date": "2016-01-30", "time": "15:00:00", "category": "cat1", "VIP": true},
{ "name": "Задача 1", "date": "2016-01-30", "time": "4:00:00", "category": "cat2", "VIP": true}
]};
var tasksStr = JSON.stringify(jsonTasks);
console.log(tasksStr);
var tasksObj = JSON.parse(tasksStr);
console.log(tasksObj);
console.log(tasksObj.tasks[0].name);


$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
    })

});
