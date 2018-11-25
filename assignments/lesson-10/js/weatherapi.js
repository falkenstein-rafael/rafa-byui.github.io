  
  let weatherRequest = new XMLHttpRequest();
  weatherRequest.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=6eeff35517b16a1f6e0f9193511613b0", true);
  weatherRequest.send();

  weatherRequest.onload = function(){
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById('current-temp').innerHTML= weatherData.main.temp;
  };
 
   