function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 51.749480, lng: -1.130180};

    var map = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Oxford, UK' // Title Location
    });
}