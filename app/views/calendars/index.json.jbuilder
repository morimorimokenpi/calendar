json.array! @events do |event|
  # binding.pry
  json.title     event.title
  json.start     event.start
  json.end       event.end
  json.allDay    event.allDay
  json.color     event.color.code
end