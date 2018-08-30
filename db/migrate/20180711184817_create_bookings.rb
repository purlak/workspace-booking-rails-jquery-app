class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :booking_date
      t.integer :booking_time
      t.integer :booking_duration
      t.integer :user_id
      t.integer :workspace_id

      t.timestamps
    end
  end
end
