const search = document.getElementById('search');
const searchBtn = document.getElementById('searchbtn');
const weatherEl = document.getElementById('weather-containe');
const APIKEY = "063a808556b64c8b7631e43f76bba43f";

async function getWeatherByLocation(city) {
    let resp = await fetch(`http://api.weatherstack.com/current?access_key=${APIKEY}&query=${city}`);
    let respData = await resp.json();
    console.log(respData);
    addWeatherToPage(respData);
}
// getWeatherByLocation("india");
function addWeatherToPage(data) {
    const weather = document.createElement('div');
    weather.classList.add("weather_header")
    weather.innerHTML=`
            <h2>${data.location.name}</h2>
            <div class="temp">
                <div class="cels">${data.current.temperature}°</div>
                <div class="cloudly">${data.current.weather_descriptions}</div>
            </div>
            <img src="${data.current.weather_icons[0]}" alt="img">
    `;
    weatherEl.innerHTML = "";
    weatherEl.appendChild(weather);
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let cityName = search.value;
    if (cityName) {
        getWeatherByLocation(cityName);
    }
});

