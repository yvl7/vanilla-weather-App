function formatDate (timestamp) {
let date = new Date (timestamp);
let hours = date.getHours();

if (hours < 10) {
    hours =`0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
    minutes = '0${minutes}';
}

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()];
return `${day} ${hours} :${minutes}`;
}


function ShowWeatherData (response) {
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = Math.round(response.data.temperature.current);
let humidityElement = document.querySelector("#humidity");
humidityElement.innerHTML = ` ${response.data.temperature.humidity}%`;
let windElement = document.querySelector("#wind");
windElement.innerHTML = ` ${response.data.wind.speed}km/h`;
let feelsTemperatureElement = document.querySelector("#feels");
feelsTemperatureElement.innerHTML = Math.round(response.data.temperature.feels_like);
console.log(response.data)
let cityElement = document.querySelector("#city");
cityElement.innerHTML = response.data.city;
let lastTimeUpdateElement = document.querySelector("#date");
lastTimeUpdateElement.innerHTML = formatDate(response.data.time * 1000);
}

let units = "metric";
let city = "Lisbon"
let keyApi = "5t7bf729abf934921a62eed49o0cd875";
let weatherUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${keyApi}&units=${units}`;

axios.get(weatherUrl).then(ShowWeatherData);