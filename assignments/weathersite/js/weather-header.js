let weatherRequest = new XMLHttpRequest();
weatherRequest.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=6eeff35517b16a1f6e0f9193511613b0", true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById('condition-text').innerHTML = weatherData.weather[0].main;
    var iconcode = weatherData.weather[0].icon;
    var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
    var logo = document.getElementById('current-weather-icon');
    logo.src = iconurl;

};