class CalendarsController < ApplicationController
  def index
    @events = Event.all
    respond_to do |format|
      format.html
      format.json
    end
  end
end
