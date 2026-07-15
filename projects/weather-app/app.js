/**
 * Weather App — Open-Meteo API (free, no API key)
 * Geocoding: city name → coordinates
 * Forecast: coordinates → current weather
 */

// DOM elements
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const statusEl = document.getElementById('status');
const weatherCard = document.getElementById('weather-card');
const cityNameEl = document.getElementById('city-name');
const countryNameEl = document.getElementById('country-name');
const temperatureEl = document.getElementById('temperature');
const weatherDescEl = document.getElementById('weather-desc');
const windSpeedEl = document.getElementById('wind-speed');
const weatherIconEl = document.getElementById('weather-icon');
const submitBtn = searchForm.querySelector('button[type="submit"]');

// Map WMO weather codes to Arabic descriptions and icons
const weatherCodes = {
  0: { desc: 'صافٍ', icon: '☀️' },
  1: { desc: 'صافٍ غالباً', icon: '🌤️' },
  2: { desc: 'غائم جزئياً', icon: '⛅' },
  3: { desc: 'غائم', icon: '☁️' },
  45: { desc: 'ضباب', icon: '🌫️' },
  48: { desc: 'ضباب متجمد', icon: '🌫️' },
  51: { desc: 'رذاذ خفيف', icon: '🌦️' },
  53: { desc: 'رذاذ', icon: '🌦️' },
  55: { desc: 'رذاذ كثيف', icon: '🌧️' },
  61: { desc: 'مطر خفيف', icon: '🌧️' },
  63: { desc: 'مطر', icon: '🌧️' },
  65: { desc: 'مطر غزير', icon: '🌧️' },
  71: { desc: 'ثلج خفيف', icon: '🌨️' },
  73: { desc: 'ثلج', icon: '🌨️' },
  75: { desc: 'ثلج كثيف', icon: '❄️' },
  80: { desc: 'زخات مطر', icon: '🌦️' },
  81: { desc: 'زخات مطر متوسطة', icon: '🌧️' },
  82: { desc: 'زخات مطر غزيرة', icon: '⛈️' },
  95: { desc: 'عاصفة رعدية', icon: '⛈️' }
};

// Get weather description and icon from WMO code
function getWeatherInfo(code) {
  return weatherCodes[code] || { desc: 'غير معروف', icon: '🌡️' };
}

// Show status message (loading or error)
function showStatus(message, isError) {
  statusEl.textContent = message;
  statusEl.classList.remove('hidden', 'error');
  if (isError) {
    statusEl.classList.add('error');
  } else {
    statusEl.classList.remove('error');
  }
}

// Hide status message
function hideStatus() {
  statusEl.classList.add('hidden');
}

// Hide weather card
function hideWeatherCard() {
  weatherCard.classList.add('hidden');
}

// Search city by name using Open-Meteo Geocoding API
async function searchCity(cityName) {
  const url =
    'https://geocoding-api.open-meteo.com/v1/search?name=' +
    encodeURIComponent(cityName) +
    '&count=1&language=ar&format=json';

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('فشل الاتصال بخدمة البحث');
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error('لم يتم العثور على المدينة');
  }

  return data.results[0];
}

// Fetch current weather by latitude and longitude
async function getWeather(latitude, longitude) {
  const url =
    'https://api.open-meteo.com/v1/forecast?latitude=' +
    latitude +
    '&longitude=' +
    longitude +
    '&current_weather=true';

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('فشل جلب بيانات الطقس');
  }

  const data = await response.json();
  return data.current_weather;
}

// Display weather data in the UI
function displayWeather(location, weather) {
  const info = getWeatherInfo(weather.weathercode);

  cityNameEl.textContent = location.name;
  countryNameEl.textContent = location.country || '';
  temperatureEl.textContent = Math.round(weather.temperature) + '°C';
  weatherDescEl.textContent = info.desc;
  windSpeedEl.textContent = 'سرعة الرياح: ' + weather.windspeed + ' km/h';
  weatherIconEl.textContent = info.icon;

  hideStatus();
  weatherCard.classList.remove('hidden');
}

// Main search handler
async function handleSearch(cityName) {
  showStatus('جاري البحث...', false);
  hideWeatherCard();
  submitBtn.disabled = true;

  try {
    const location = await searchCity(cityName);
    showStatus('جاري جلب بيانات الطقس...', false);

    const weather = await getWeather(location.latitude, location.longitude);
    displayWeather(location, weather);
  } catch (error) {
    showStatus(error.message || 'حدث خطأ. حاول مرة أخرى.', true);
  } finally {
    submitBtn.disabled = false;
  }
}

// Form submit event
searchForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    handleSearch(city);
  }
});

// Load Damascus weather on page load as default demo
document.addEventListener('DOMContentLoaded', function () {
  cityInput.value = 'دمشق';
  handleSearch('دمشق');
});
