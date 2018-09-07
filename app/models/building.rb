class Building < ApplicationRecord
    has_many :workspaces
    
    validates :location_name, presence:true, uniqueness: true
    
    def self.sort_alphabetically
        self.order(location_name: :asc )   
    end 
    
    def next 
        self.where("id > ", id).first
    end 
end
