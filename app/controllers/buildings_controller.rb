class BuildingsController < ApplicationController
    before_action :admin_access
    before_action :current_user
    skip_before_action :admin_access, only: [:index, :show]
    
    def index 
        @buildings = Building.all.sort_alphabetically
        #@user = current_user
        respond_to do |f|
                f.html
                f.json {render json: @buildings}
        end 
    end 
    
    def new
        @building = Building.new
        @buildings = Building.all.sort_alphabetically
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
        respond_to do |f|
                f.html
                f.json {render json: @building}
        end 
    end 
    
    def ids
        render json: Building.all.map{|b| b.id}
    end
    
    private
    
    def building_params
        params.require(:building).permit(:location_name, :address)
    end 
    
end
