class CreateBuildings < ActiveRecord::Migration[5.2]
  def change
    create_table :buildings do |t|
      t.string :location_name
      t.string :address

      t.timestamps
    end
  end
end
