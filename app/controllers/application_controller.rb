class ApplicationController < ActionController::Base
    
    def index 
        
    end 
    
    def current_user
        @user = User.find_by(id: session[:user_id])
    end 
    
    def logged_in
        if !session[:user_id]
            redirect_to '/'
        end     
    end 
    
    def admin_access
        if !current_user.admin
            redirect_to current_user
        end 
    end 
    
end
