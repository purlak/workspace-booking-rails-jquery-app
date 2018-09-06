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
                
            //    })
            })
    })
}

function Building(building) {
        this.location_name = building.location_name
        this.address = building.address
        this.workspaces = building.workspaces
        
    }
    
Building.prototype.formatIndex = function() {    
    let workspacesHtml = ``
        this.workspaces.forEach((w) => {
        workspacesHtml += `<h4>Workspace Type: ${w.workspace_type}</h4>`
    })
    
    let buildingHtml = `
        <h4>Building Location: ${this.location_name}, ${this.address}</h3>    `  
    return buildingHtml
}

Building.prototype.formatShow=function(){
    let buildingHtml = ` 
    <h4>Booking Date: ${this.booking_date}</h4>
    <button class="next-booking">Next</button>
`
    return bookingHtml
}