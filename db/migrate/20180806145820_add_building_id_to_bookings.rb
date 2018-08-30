class AddBuildingIdToBookings < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :building_id, :integer
  end
end
