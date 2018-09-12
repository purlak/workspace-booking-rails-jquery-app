Rails.application.routes.draw do 
    root to: "application#index"
    
    get '/auth/github/callback' => 'sessions#githubcreate'
    
    resources :users do 
        resources :bookings, only: [:index]
    end 
    
    resources :workspaces, only: [:new, :create] do 
         resources :bookings, only: [:new, :create, :show]
    end 
    
    resources :buildings
    
   
    #Signup routes
    get '/signup', to: 'users#new'
    post '/signup', to: 'users#create'
    
    #Login routes
    get '/login', to: 'sessions#new'
    post '/login', to: 'sessions#create'
    
    #Logout route
    get 'logout' => 'sessions#logout'

    get '/building_ids', to: 'buildings#ids'    
end
