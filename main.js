'use strict';
const apiKey = '2079632753a08aecc17dd1916dea0b7b';
const city = 'Odesa';

const appContainer = document.getElementById('app');
const dateContainer = document.querySelector('.date-container');
const weatherContainer = document.querySelector('.weather-container');
const updateWeatherButton = document.querySelector('.update-info');

function renderDate() {
  const date = new Date();
  const day = date.getDate();
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
  const year = date.getFullYear();

  dateContainer.innerHTML = `<p class="date-text">${month} ${day}, ${year}</p>`;
}

function renderWeather(data) {
  const weatherRightSide = document.createElement('div');
  const weatherLeftSide = document.createElement('div');

  weatherRightSide.classList.add('weather-right-side');
  weatherLeftSide.classList.add('weather-left-side');

  const temperature = Math.round(data.main.temp);
  const feelTemperature = Math.round(data.main.feels_like);
  const cloudStatus = data.weather[0].main;
  const humidity = data.main.humidity;
  const pressure = data.main.pressure;
  const wind = data.wind.speed;
  const weatherIcon = data.weather[0].icon;

  weatherLeftSide.innerHTML = `
    <p class="humidity">Humidity: ${humidity}%</p>
    <p class="pressure">Pressure: ${pressure} hPa</p>
    <p class="wind">Wind: ${wind} m/s</p>
  `;

  weatherRightSide.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="weather-icon">
    <p class="temperature">${temperature} &deg;C</p>
    <p class="feel-temperature">Feels like: ${feelTemperature} &deg;C</p>
    <p class="cloud-status">${cloudStatus}</p>
  `;

  weatherContainer.innerHTML = '';
  weatherContainer.appendChild(weatherLeftSide);
  weatherContainer.appendChild(weatherRightSide);
}

function renderWeatherError() {
  weatherContainer.innerHTML = `<p class="error">Could not fetch weather. Try again.</p>`;
}

function getWeather() {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Weather fetch failed');
    }
    return response.json();
  })
}

updateWeatherButton.addEventListener('click', () => {
  getWeather()
    .then(data => renderWeather(data))
    .catch(() => renderWeatherError());
})

getWeather()
  .then(data => renderWeather(data))
  .catch(() => renderWeatherError());
renderDate();