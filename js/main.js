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
