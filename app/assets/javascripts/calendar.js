$(document).on("turbolinks:load", function() {
  $("#calendar").fullCalendar({
    header: {
      left: "prevYear,prev",
      center: "title,today,month,agendaWeek,agendaDay,listYear",
      right: "next,nextYear"
    },
    firstDay: 1
  });
  
});