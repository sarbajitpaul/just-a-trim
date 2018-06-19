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
    content: '<h4>Just A Trim</h4><p>42, RABINDRANATH TAGORE ROAD,<br>SWADESHI MORE, SODEPUR,<br>KOLKATA - 700114</p>'
  });

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}




var d = new Date();
document.getElementById('year').innerHTML = d.getFullYear();
