class SessionsController < ApplicationController
    
    def new
        @user=User.new
    end 
    
    def create
        @user = User.find_by(email: params[:user][:email])
        
        if @user  && @user.authenticate(params[:user][:password])
            session[:user_id] = @user.id
            redirect_to user_path(@user)
        else 
            redirect_to '/login'
        end 
    end
    
    def githubcreate
           @user = User.find_or_create_by(email: auth['info']['email']) do |u|
                u.name = auth['info']['name']
                u.email = auth['info']['email']
                u.password = auth['uid']
           end 
        session[:user_id] = @user.id  
        redirect_to user_path(@user)
    end
    
    def show
        
    end 
    
    def logout 
        session.delete :user_id
        redirect_to root_path
    end 
    
    private
    
    def user_params
         params.require(:user).permit(:name, :age, :email, :admin, :password)
    end
    
      def auth
        request.env['omniauth.auth']
    end
    
end
