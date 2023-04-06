const search = document.getElementById('search');
const searchBtn = document.getElementById('searchbtn');

const APIKEY = "063a808556b64c8b7631e43f76bba43f";

async function getWeatherByLocation(city) {
    let resp = await fetch(`http://api.weatherstack.com/current?access_key=${APIKEY}&query=${city}`);
    let respData = await resp.json();
    console.log(respData);
    addWeatherToPage(respData)
}
// getWeatherByLocation("india");

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let cityName = search.value;
    if (cityName) {
        getWeatherByLocation(cityName);
    }
});

