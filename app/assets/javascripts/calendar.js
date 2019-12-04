$(document).on("turbolinks:load", function() {
  var data = new Array();
  $.ajax({
    type: "GET",
    url: "/",
    dataType: "json"
  })
  .done(function(event) {
    $("#calendar").fullCalendar({
      timeFormat: "HH:mm", // 24時間表記にする
      header: {
        left: "prev,next",
        center: "title",
        right: "today"
      },
      displayEventEnd: {
        // 終了時間を表示
        month: true,
        basicWeek: false,
        default: true
      },
      events: event // 受け取ったjsonの中身全部表示
    });
  })
  .fail(function(event) {
    alert("ng");
  });
});