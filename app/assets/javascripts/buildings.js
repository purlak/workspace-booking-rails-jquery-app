let ids = []

$(() => {
    getBuildingIds()
    bindBuildingClickHandlers ()  
})

var getBuildingIds = () => {
    fetch('/building_ids')
        .then(res => res.json())
        .then(buildingIds => {
            //debugger
            ids = buildingIds
        })
}

var bindBuildingClickHandlers = () => {
    //console.log('bind click handlers in building.js')
     $('.next').on('click', function(e) {
        e.preventDefault()
         //console.log(ids)
        let nextId=+($(this).attr("id")) + 1
         
         if (!ids.includes(nextId)){ 
            nextId = ids[0]
             
         }
        //console.log('making request')
         fetch(`/buildings/${nextId}.json`)
            
         .then((res) => res.json())
         .then(building => {
            $('.building-show').html(' ')
             //debugger
             //building.forEach((b) => {
                let newBuilding = new Building(building)
                let buildingHtml = newBuilding.formatIndex()
               
                $('.building-show').append(buildingHtml)
                $('button').attr("id", nextId);
            //    })
            })
    })
    
//    $('.next-building').on('click', function(e){
//        let nextId=+($(this).attr("id")) + 1
//        fetch (`/buildings/${nextId}.json`)
//        
//        
//    })
}

function Building(building) {
        this.location_name = building.location_name
        this.address = building.address
        this.workspaces = building.workspaces
        
    }
    
Building.prototype.formatIndex = function() {    
    let workspacesHtml = ``
        this.workspaces.forEach((w) => {
        workspacesHtml += `<li> ${w.workspace_type} - <a href="/workspaces/${w.id}/bookings/new">Available</a></li>`
        })
    //debugger
    
    let buildingHtml = `  
        <h3>Location: ${this.location_name}</h3>
        <h4>Address: ${this.address}</h4>
        <ul>
            ${workspacesHtml}     
        </ul>
`  
    return buildingHtml
    
}

//Building.prototype.formatShow=function(){
//    let buildingHtml = ` 
//    <h4>Booking Date: ${this.booking_date}</h4>
//`
//    return bookingHtml
//}