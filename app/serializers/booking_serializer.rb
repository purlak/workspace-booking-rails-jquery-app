class BookingSerializer < ActiveModel::Serializer
  attributes :booking_date, :booking_time, :booking_duration
end
