
let weatherRequest = new XMLHttpRequest();
weatherRequest.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=6173331&units=imperial&APPID=6eeff35517b16a1f6e0f9193511613b0", true);
weatherRequest.send();
weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    weatherData.rain = 0;
    document.getElementById('current-wather').innerHTML = weatherData.weather[0].main;
    document.getElementById('current-temp').innerHTML = Math.round(weatherData.main.temp);
    var iconcode = weatherData.weather[0].icon;
    var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
    var logo = document.getElementById('current-weather-icon');
    logo.src = iconurl;
};
