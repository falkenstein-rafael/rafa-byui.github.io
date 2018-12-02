// Input - get temperature and wind speed
let temp = parseInt(document.getElementById("current-temp").innerHTML);
let windSpeed = parseInt(document.getElementById("current-wind-speed").innerHTML);

// Processing - Calculate chill wind factor and round
let chillFactor = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
chillFactor = Math.round(chillFactor * 10) / 10;
// Output - chill wind factor
document.getElementById("windChill").innerHTML = chillFactor;