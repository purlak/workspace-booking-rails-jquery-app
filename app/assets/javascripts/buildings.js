// Adding JS to the building show page
let ids = []

$(() => {
    getBuildingIds()
    bindBuildingClickHandlers () 
    bindBuildingFormClickHandlers () 
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
     $('.next').on('click', function(e) {
        e.preventDefault()
        let nextId=+($(this).attr("id")) + 1
         
         if (!ids.includes(nextId)){ 
            nextId = ids[0]
             
         }
        
         fetch(`/buildings/${nextId}.json`)
            
         .then((res) => res.json())
         .then(building => {
            $('.building-show').html(' ')
                let newBuilding = new Building(building)
                let buildingHtml = newBuilding.formatIndex()
               
                $('.building-show').append(buildingHtml)
                $('button').attr("id", nextId);
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
        workspacesHtml += `<li> ${w.workspace_type} - <a href="/workspaces/${w.id}/bookings/new">Available</a></li>`
        })
    let buildingHtml = `  
        <h3>Location: ${this.location_name}</h3>
        <h4>Address: ${this.address}</h4>
        <ul>
            ${workspacesHtml}     
        </ul>
`  
    return buildingHtml
    
}

// Adding JS to the new building form page 

var bindBuildingFormClickHandlers = () => {
     $('.add-location').on('click', function(e) {
         debugger
         //console.log(5)
        e.preventDefault()
         
         
        $.ajax({
            method: "GET",
            url: this.href
        }).success(function(response){
        
    })
}