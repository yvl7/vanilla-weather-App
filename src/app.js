

function formatDate (timestamp) {
let date = new Date (timestamp);
let hours = date.getHours();

if (hours < 10) {
    hours =`0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
}

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()];
return `${day} ${hours} :${minutes}`;
}
 


    
   
function displayForecast(response) {
    console.log(response.data.daily);
    let forecastElement = document.querySelector("#forecast");
    let forecastHTML = "";
    let days = ["Thu", "Fri", "Sat"];
    days.forEach(function(day){
    forecastHTML = 
       forecastHTML +
        `
     <div class="row next-corecast-wrapper">
        <div class="row next-corecast">
        <div class="col-2">${day}</div>
        <div class="col-4">img</div>
        <div class="col-3">temp-max</div>
        <div class="col-2">temp-min</div>
        </div>
   </div>
     `;    
    })
      
     forecastElement.innerHTML = forecastHTML;
}
    



function getForecast (coordinates) {
    let units = "metric";
    let keyApi = "5t7bf729abf934921a62eed49o0cd875";
    let weatherUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${(coordinates.latitude)}&lon=${coordinates.longitude}&key=${keyApi}&units=${units}`;
    axios.get(weatherUrl).then(displayForecast);
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
let cityElement = document.querySelector("#city");
cityElement.innerHTML = response.data.city;
let lastTimeUpdateElement = document.querySelector("#date");
lastTimeUpdateElement.innerHTML = formatDate(response.data.time * 1000);
let iconElement = document.querySelector("#icon");
iconElement.setAttribute("src", `src/icon-${response.data.condition.icon}.png`);
iconElement.setAttribute("alt", response.data.condition.description);
getForecast(response.data.coordinates);

}

function search (city) {
    let units = "metric";
    let keyApi = "5t7bf729abf934921a62eed49o0cd875";
    let weatherUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${keyApi}&units=${units}`;
    axios.get(weatherUrl).then(ShowWeatherData);
}
function handleSubmit (event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#input-city");
    search(cityInputElement.value);
    
}

let form = document.querySelector('#search-form');
form.addEventListener("submit", handleSubmit);