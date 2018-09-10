class BuildingsController < ApplicationController
    
    before_action :current_user
    before_action :admin_access
    skip_before_action :admin_access, only: [:index, :create, :show]
    
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
        @user = current_user
        @buildings = Building.all.sort_alphabetically
    end 
    
    def create
        #admin_access
        @building =  Building.create(building_params) 
        if @building.save
            render json: @building, :layout => false
        else
            render json: {errors: @building.errors.full_messages}
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
    
    def next 
        
    end 
    
    private
    
    def building_params
        params.require(:building).permit(:location_name, :address)
    end 
    
end
