// Adding JS to the building show page (next button) as well as new building form submission (to make objects appear without requiring a page refresh)

// Adding Next button to building show page 
let ids = []

$(() => {
    getBuildingIds()
    bindBuildingClickHandlers () 
    bindBuildingFormClickHandlers () 
})

var getBuildingIds = () => {
    fetch('/building_ids')
        .then(res => res.json()) //gets response from the fetch request, response includes headers, status of the request - if it was successful etc. this needs to be parsed for data
        .then(buildingIds => { //gets data from the response
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
        
         fetch(`/buildings/${nextId}.json`) //fetch request to show
            
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

   $(".add-location").on("submit", function(e) {
    //e.preventDefault()   
       
    $.ajax($(this).attr('action'),{
       
        data: $(this).serialize(),  // .serialize method from jquery
        type: "POST",
        dataType: "json",
        success: function(data) {
           //debugger
            if (typeof data.location_name === "undefined"){
                return
            }
                var location_name = data.location_name
                var address = data.address
                let newHtml = `<a href="/buildings/${data.id}"> ${location_name}</a> - ${address} <br/>`
        
                $(".loc").append(newHtml)
            
        },  
        error: function (data) {
            console.log (data)
        }
        
    });

    e.preventDefault(); 
});
  
}


