class BuildingsController < ApplicationController
    before_action :admin_access
    before_action :current_user
    skip_before_action :admin_access, only: [:index, :show]
    
    def index 
        @buildings = Building.all.sort_alphabetically
        #@user = current_user
    end 
    
    def new
        @building = Building.new
    end 
    
    def create
        @building =  Building.create(building_params) 
        if @building.save
            redirect_to @building
        else 
            render :new 
        end 
    end 
    
    def show
        #@user = current_user
        @building = Building.find_by(:id => params[:id])
    end 
    
    private
    
    def building_params
        params.require(:building).permit(:location_name, :address)
    end 
    
end
