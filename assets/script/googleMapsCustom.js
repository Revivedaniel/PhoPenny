//Restaurant location
var laHabraLocation = {lat: 33.9319, lng: -117.9461}
var phoPennyLocation = {lat: 33.91610909678432, lng: -117.93374894289356}
        //Initialiting google map with options
        function initMap(){
            //Map options
            var options = {
                //Map zoom
                zoom: 13,
                //Where the map will center on
                center: {lat: laHabraLocation.lat, lng: laHabraLocation.lng}
            }
            // New map
            var map = new google.maps.Map(document.getElementById("map"), options);

            // Add marker
            var marker = new google.maps.Marker({
                //location of marker
                position: {lat: phoPennyLocation.lat, lng: phoPennyLocation.lng},
                //picks the which map to display the marker on
                map: map,
                //Animates the icon
                animation: google.maps.Animation.DROP,
                //to change the marker
                icon:"",
            })
        }