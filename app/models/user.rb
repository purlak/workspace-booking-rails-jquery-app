class User < ApplicationRecord
    has_many :bookings
    has_many :workspaces
    
    has_secure_password
    
    validates :name, presence: true
    validates :email, uniqueness: true
    validates :password, length: { in: 6..20 }
    
    def user_name
        self.name
    end 
    
end
