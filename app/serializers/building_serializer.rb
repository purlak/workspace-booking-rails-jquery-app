class BuildingSerializer < ActiveModel::Serializer
  attributes :location_name, :address
    
has_many :workspaces
end
