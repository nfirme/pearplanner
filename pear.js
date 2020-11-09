

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    /* themeSystem: 'bootstrap', */
    editable: true,
    durationEditable: true,
    height: 800,
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    footerToolbar: {
      right: 'addEventButton'
    },
    customButtons: {
      addEventButton: {
        text: 'add event',
        click: function() {
          var dateStr = prompt('Enter a date in YYYY-MM-DD format');
          var date = new Date(dateStr + 'T00:00:00'); // will be in local time
          var name = prompt('Enter event title');

          if (!isNaN(date.valueOf())) { // valid?
            calendar.addEvent({
              title: name,
              start: date,
              allDay: true
            })
            alert('Great. Now, update your database...');
          } else {
            alert('Invalid date.');
          }
        }
      }
    },
    events: [
      
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2020-10-28'
      }
    ]
  });

  calendar.render();
});

 