class BookingsController < ApplicationController
    before_action :current_user, 
    #before_action :set_booking, only: [:show]
    
    def index 
        @bookings = Booking.all
        respond_to do |f|
            f.html
            f.json {render json: @bookings}
        end 
    end 
    
    def new
        @workspace = Workspace.find_by(id: params[:workspace_id])
        @booking = Booking.new
        
    end 
    
    def create
       
        @workspace = Workspace.find_by(id: params[:workspace_id])
        @booking = Booking.create(booking_params)
        @booking.user_id = current_user.id
       
        if @booking.save
               redirect_to workspace_booking_path(@workspace, @booking)
        else 
            render :new 
        end 
    end 
    
    def show
            @booking = Booking.find_by(:id => params[:id])
            respond_to do |f|
                f.html
                f.json {render json: @booking}
            end 
    end 
    
    private
    
    def booking_params
        params.require(:booking).permit(:booking_date, :booking_time, :booking_duration, :workspace_id, :user_id)
    end 
    
    
    
end
