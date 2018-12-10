var map;
function initMap() {
    // Initialize Map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 55.924492, lng: 21.084525},
        zoom: 8,
        disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap']
          }
    });

    // Add Marker to the map
    var marker = new google.maps.Marker({
        position: {lat: 55.924492, lng: 21.084525},
        // label: 'Palanga label',
        title: 'Palanga title',
        map: map
    });

    // Add multiple Markers from data source with LatLng
    // for (var i = 0; i < dataSource.length; i++) {
    //     var coords = results.features[i].geometry.coordinates;
    //     var latLng = new google.maps.LatLng(coords[1],coords[0]);
    //     var marker = new google.maps.Marker({
    //       position: latLng,
    //       map: map
    //     });
    // }

    // Konvertuojame adresą į LatLng koordinates, kurias naudosime Marker sudėjimui ant žemėlapio
    var decoder = new google.maps.Geocoder();
    // Address laukelyje reikia įrašyti tikslų adresą 
    decoder.geocode( { 'address': 'Basanavičiaus 2, Palanga'}, function(results, status) {
        if (status == 'OK') {
          map.setCenter(results[0].geometry.location);
          var markerResult = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
    });

}
// Palanga 55.924492, 21.084525