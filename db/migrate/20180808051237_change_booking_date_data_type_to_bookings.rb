class ChangeBookingDateDataTypeToBookings < ActiveRecord::Migration[5.2]
  def change
      change_column :bookings, :booking_date, :string
  end
end
