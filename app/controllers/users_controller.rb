class UsersController < ApplicationController
    before_action :logged_in
    skip_before_action :logged_in, only: [:new, :create]
    
    def index
        
    end 
    
    def new 
        @user=User.new
    end 
    
    def create
        @user = User.new(user_params)
        if @user.save
            session[:user_id] = @user.id
            redirect_to @user
        else
            render :new
        end 
    end 
    
    def show
         @user = User.find_by(:id => params[:id])
    end 
    
    private
    
    def user_params
         params.require(:user).permit(:name, :age, :email, :admin, :password)
    end
    
end
