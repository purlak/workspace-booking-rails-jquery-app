$(() => {
    bindClickHandlers ()  
})

var bindClickHandlers = () => {
    $('.all_bookings').on('click', function(e)  {
        e.preventDefault()
//        history.pushState(null, null, "bookings")
        fetch(`${this.href}.json`)
         .then((res) => res.json())
         .then(data => {
            $('#reserved-bookings').html(' ')
            data.forEach((b) => {
                let newBooking = new Booking(b)
                let bHtml = newBooking.formatIndex()
                $('#reserved-bookings').append(bHtml)
                
            })
        })
    })
    
}

function Booking(booking) {
        this.booking_date = booking.booking_date
        this.booking_time = booking.booking_time
        this.booking_duration = booking.booking_duration
       
    }
    
Booking.prototype.formatIndex = function() {    

    let bookingHtml = `

        <h4>Booking Date: ${this.booking_date} at ${this.booking_time}:00</h3>
        <h4>Booking Duration: ${this.booking_duration} Hour(s)</h3>
        <h4>-----------------------</h4>
    `   
    
    return bookingHtml
}