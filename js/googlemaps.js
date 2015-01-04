// First, create an object containing LatLng for each city.
var citymap = {};
var cityCircle;

function initialize_map() {
  citymap['bolton'] = {
    center: new google.maps.LatLng(42.433432, -71.607854)
  };
  citymap['lowell'] = {
    center: new google.maps.LatLng(42.633425, -71.316172)
  };

  // Create the map.
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(42.548928, -71.470391),
    mapTypeControl: false,
    navigationControl: false,
    draggable: false,
    zoomControl: false,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  // Construct the circle for each value in citymap.
  for (var city in citymap) {
    var Options = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: citymap[city].center,
      radius:  16093    // 10 miles in metres
    };

    // Add the circle for this city to the map.
    cityCircle = new google.maps.Circle(Options);
  }
}
