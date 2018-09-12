class BuildingSerializer < ActiveModel::Serializer
    attributes :id, :location_name, :address
    has_many :workspaces
end
