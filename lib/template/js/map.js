function init_map(address){
                
    geocoder = new google.maps.Geocoder();
    
    geocoder.geocode({
        'address': address
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var myOptions = {
                zoom: 14,
                center: results[0].geometry.location,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);

            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });

            infowindow = new google.maps.InfoWindow({content:'<strong>Estou aqui!</strong><br>'+address+'<br>'});

            google.maps.event.addListener(marker, 'click', function(){
                infowindow.open(map,marker);
            });

            infowindow.open(map,marker);
        }
    });    

}