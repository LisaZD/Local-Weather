//WEATHER UNDERGROUND

$(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/973d6d9bfab2a8a0/geolookup/conditions/q/autoip.json",
  dataType : "jsonp",
  success : function(parsed_json) {
    console.log(parsed_json);
    var location = parsed_json['location']['city'];
    var temp_f = parsed_json['current_observation']['temp_f'];
    var temp_c = parsed_json['current_observation']['temp_c'];
    var city = parsed_json['location']['city'];
    var state = parsed_json['location']['state'];
    var icon = parsed_json['current_observation']['icon'];
    var iconURL = "https://icons.wxug.com/i/c/f/" + icon + ".gif";
    $("#loc").html(city + ", " + state);
    $("#tempF").html("Current temperature: " + temp_f + "&deg; F");
    $("#tempC").html("Current temperature: " + temp_c + "&deg; C");
    $("#icon").attr("src", iconURL);  
  }
  });
});

//Toggle celsius and fahrenheit

$(".change").click(function() {
  $("button").toggle();
  $(".temp").toggle();
});