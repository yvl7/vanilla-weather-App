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
}

let units = "metric";
let city = "Lisbon"
let keyApi = "5t7bf729abf934921a62eed49o0cd875";
let weatherUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${keyApi}&units=${units}`;

axios.get(weatherUrl).then(ShowWeatherData);
