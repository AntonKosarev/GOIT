//var jsonTasks = {
//    "tasks": [
//{ "name": "Задача 2", "date": "2016-01-30", "time": "15:00:00", "category": "cat1", "VIP": true},
//{ "name": "Задача 1", "date": "2016-01-30", "time": "4:00:00", "category": "cat2", "VIP": true}
//]};
//var tasksStr = JSON.stringify(jsonTasks);
//console.log(tasksStr);
//var tasksObj = JSON.parse(tasksStr);
//console.log(tasksObj);
//console.log(tasksObj.tasks[0].name);

$(document).ready(function() {

    $('#calendar').fullCalendar({

        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,listYear'
        },

        listTime: false, // don't show the time column in list view

        // THIS KEY WON'T WORK IN PRODUCTION!!!
        // To make your own Google API key, follow the directions here:
        // http://fullcalendar.io/docs/google_calendar/
        googleCalendarApiKey: 'AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE',

        // US Holidays
        events: 'en.usa#holiday@group.v.calendar.google.com',

        eventSources: [

            // your event source
            {
                "tasks": [
                    { "name": "Задача 2", "date": "2016-01-30", "time": "15:00:00", "category": "cat1", "VIP": true},
                    { "name": "Задача 1", "date": "2016-01-30", "time": "4:00:00", "category": "cat2", "VIP": true}
                ]
            }

            // any other sources...

        ],

        eventClick: function(event) {
            // opens events in a popup window
            window.open(event.url, 'gcalevent', 'width=700,height=600');
            return false;
        },

        loading: function(bool) {
            $('#loading').toggle(bool);
        }

    });

});