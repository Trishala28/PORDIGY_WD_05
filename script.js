async function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const location = locationInput.value;

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY&units=metric`);
        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
            <p>Location: ${data.name}, ${data.sys.country}</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        alert('Error fetching weather data: ' + error.message);
    }
}
