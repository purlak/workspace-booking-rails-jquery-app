$(() => {
    bindBookingClickHandlers ()  
})

//let newData=[]
//debugger
var bindBookingClickHandlers = () => {
    //console.log('bind click handlers in booking.js')
    $('.all_bookings').on('click', function(e)  {
        e.preventDefault()
       //debugger
        fetch(`${this.href}.json`)
         .then((res) => res.json())
         .then(data => {
            $('#reserved-bookings').html(' ')
            
            let newData = data.sort ((a,b) => { 
                var x = Date.parse(a.booking_date); 
                var y = Date.parse(b.booking_date); 
                return x-y;
            })
            
            newData.forEach((b) => {
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

Booking.prototype.formatShow = function() {
    let bookingHtml = ` 
    <h4>Booking Date: ${this.booking_date}</h4>
`
    return bookingHtml
}

