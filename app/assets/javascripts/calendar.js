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
      events: event,// 受け取ったjsonの中身全部表示
      eventTextColor: 'white'
    });
  })
  .fail(function(event) {
    alert("ng");
  });

  jQuery(function($){
    $('.tab').click(function(){
      $('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
      $('.is-show').removeClass('is-show');
      // クリックしたタブからインデックス番号を取得
      const index = $(this).index();
      // クリックしたタブと同じインデックス番号をもつコンテンツを表示
      $('.event-index-container__content').eq(index).addClass('is-show');
    });
  });
});