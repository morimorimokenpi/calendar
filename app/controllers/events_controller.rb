class EventsController < ApplicationController
  before_action :set_event, only: [:destroy, :edit, :update]

  def index
    @events = Event.all.order("created_at DESC")
  end
  
  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      redirect_to root_path
    else
      render 'new'
    end
  end

  def edit
    event = Event.find(params[:id])
  end

  def update
  end

  def destroy
    event = Event.find(params[:id])
    redirect_to events_path if event.destroy
  end

  private
  def set_event
    event = Event.find(params[:id])
  end
  
  def event_params
    params.require(:event).permit(:title, :start, :end)
  end
end
