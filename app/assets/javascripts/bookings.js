
$(() => {
    bindClickHandlers ()  
})

const bindClickHandlers = () => {
    $('.all_bookings').on('click', function(e)  {
        e.preventDefault()
        history.pushState(null, null, "bookings")
        fetch(`${this.href}.json`)
         .then((res) => res.json())
         .then(data => {
            $('#app-container').html(' ')
            data.forEach((b) => {
                let newBooking = new Booking(b)
                let bHtml = newBooking.formatIndex()
                $('#app-container').append(bHtml)
                
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
        <a href="/bookings/%{this.id}"<h3>${this.booking_date}</h3></a>
        <h3>${this.booking_time}</h3>
        <h3>${this.booking_duration}</h3>
    `
    return bookingHtml
}