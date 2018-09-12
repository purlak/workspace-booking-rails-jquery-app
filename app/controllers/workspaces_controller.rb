class WorkspacesController < ApplicationController
    before_action :admin_access
    before_action :current_user
    skip_before_action :admin_access, only: [:index]
    
    def index 
        @workspaces = Workspace.all
    end 
    
    def new
        @workspace = Workspace.new
    end 
    
    def create
        @workspace = Workspace.new(workspace_params)# 
        @workspace.availability = true
       
        if @workspace.save
            redirect_to building_path(@workspace.building_id)     
        else 
            render :new 
        end
    end 
    
    def show     
    end 
    
    private
    
    def workspace_params
        params.require(:workspace).permit(:workspace_type, :building_id)
    end 
end
