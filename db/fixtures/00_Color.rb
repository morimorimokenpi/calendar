color_id = 0

color_id += 1
Color.seed do |s|
  s.id        = color_id
  s.code      = "#7986CB"
  s.name      = "仕事"
end

color_id += 1
Color.seed do |s|
  s.id        = color_id
  s.code      = "#ff6c38"
  s.name      = "遊び"
end

color_id += 1
Color.seed do |s|
  s.id        = color_id
  s.code      = "#3788d8"
  s.name      = "ToDo"
end

color_id += 1
Color.seed do |s|
  s.id        = color_id
  s.code      = "#329B24"
  s.name      = "その他"
end
