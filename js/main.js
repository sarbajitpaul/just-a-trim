$(document).ready(function(){
  $('#show-menu-label').on('click', function(){
    $('#menu').slideToggle(500);

    if($(this).text() == 'Show Menu'){
      $(this).text('Hide Menu');
    }
    else{
      $(this).text('Show Menu');
    }
  });
});



function initMap(){
  var justATrimLocation = {lat: 22.698514, lng: 88.375165};

  var options = {
    zoom: 15,
    center: justATrimLocation
  };

  var map = new google.maps.Map(document.getElementById('map'), options);

  var marker = new google.maps.Marker({
    position: justATrimLocation,
    map: map
  });

  var infoWindow = new google.maps.InfoWindow({
    content: '<p>Just A Trim</p>'
  });

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}
