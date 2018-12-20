
let weatherRequest = new XMLHttpRequest();
weatherRequest.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=6eeff35517b16a1f6e0f9193511613b0", true);
weatherRequest.send();
weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    weatherData.rain = 0;
    document.getElementById('current-wather').innerHTML = weatherData.weather[0].main;
    document.getElementById('current-temp').innerHTML = Math.round(weatherData.main.temp);
    document.getElementById('current-humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('current-wind-speed').innerHTML = Math.round(weatherData.wind.speed);
    document.getElementById('current-wind-direction').innerHTML = degToCompass(weatherData.wind.deg);
    document.getElementById('condition-text').innerHTML = weatherData.weather[0].main;
    var iconcode = weatherData.weather[0].icon;
    var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
    var logo = document.getElementById('current-weather-icon');
    logo.src = iconurl;

    //deg to compass convertion
    function degToCompass(dir) {
        var val = Math.floor((dir / 22.5) + 0.5);
        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }

    // Wind Chill factor
    // Input - get temperature and wind speed
    let temp = parseInt(document.getElementById("current-temp").innerHTML);
    let windSpeed = parseInt(document.getElementById("current-wind-speed").innerHTML);

    // Processing - Calculate chill wind factor and round
    let chillFactor = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
    chillFactor = Math.round(chillFactor * 10) / 10;
    // Output - chill wind factor
    document.getElementById("windChill").innerHTML = Math.round(chillFactor);
};

let forecastRequest = new XMLHttpRequest();
forecastRequest.open("GET", "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=6eeff35517b16a1f6e0f9193511613b0", true);
forecastRequest.send();

forecastRequest.onload = function () {
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);
    showForecast(forecastData);

    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    //document.getElementById('forecast-one').innerHTML = Math.round(forecastData.list[4].main.temp_max);
    document.getElementById('forecast-day-one').innerHTML = days[new Date(forecastData.list[4].dt * 1000).getDay()];
    //document.getElementById('forecast-two').innerHTML = Math.round(forecastData.list[12].main.temp_max);
    document.getElementById('forecast-day-two').innerHTML = days[new Date(forecastData.list[12].dt * 1000).getDay()];
    //document.getElementById('forecast-three').innerHTML = Math.round(forecastData.list[20].main.temp_max);
    document.getElementById('forecast-day-three').innerHTML = days[new Date(forecastData.list[20].dt * 1000).getDay()];
    //document.getElementById('forecast-four').innerHTML = Math.round(forecastData.list[28].main.temp_max);
    document.getElementById('forecast-day-four').innerHTML = days[new Date(forecastData.list[28].dt * 1000).getDay()];
    //document.getElementById('forecast-five').innerHTML = Math.round(forecastData.list[36].main.temp_max);
    document.getElementById('forecast-day-five').innerHTML = days[new Date(forecastData.list[36].dt * 1000).getDay()];

    function showForecast(jsonObj) {
        var currentForecast = jsonObj['list'];

        let tempForecast = [];
        let day = 1;
        currentForecast.forEach(x => {
            if (x.dt_txt.includes('15:00:00')) {
                tempForecast[day] = x.main.temp;
                day++;
            }
        })

        for (var i = 1; i <= 5; i++) {
            document.getElementById('forecast-' + i).innerHTML = Math.round(tempForecast[i]);
        }
    }

};

