window.myMap = function() {
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
      center: new google.maps.LatLng(50.005548, 36.229696),
      zoom: 15
  };
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(50.005548, 36.229696),
    // animation: google.maps.Animation.BOUNCE
    });
  
    var map = new google.maps.Map(mapCanvas, mapOptions);
  marker.setMap(map);

}