class Event < ApplicationRecord
  belongs_to :color

  validates :title, presence: true
  validates :start, presence: true
  validates :end,   presence: true
  validates :color_id, presence: true
end
