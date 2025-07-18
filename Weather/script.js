const apiKey = 'dc0b145845091a90ba14dec39f8dc482'; // 🔑 Replace with your OpenWeatherMap API Key

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const weatherDiv = document.getElementById('weatherInfo');

  if (!city) {
    weatherDiv.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await res.json();

    if (data.cod === '404') {
      weatherDiv.innerHTML = "<p>City not found. Please try again.</p>";
      return;
    }

    const weatherHtml = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon"/>
      <p><strong>${Math.round(data.main.temp)}°C</strong> - ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
    `;

    weatherDiv.innerHTML = weatherHtml;
  } catch (error) {
    weatherDiv.innerHTML = "<p>Error fetching weather data.</p>";
    console.error(error);
  }
}
