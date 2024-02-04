var icon = document.getElementById("icon");
const button = document.getElementById("slider")

button.onclick = function(){
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")){
        icon.src = "public/sun.png";
    } else {
        icon.src = "public/moon.png";
    }
}

API_KEY = "<Your api key from weatherapi.com>"
API_URL = "http://api.weatherapi.com/v1"


const showError = () => {
  const error = document.getElementById('error-message');
  error.classList.remove("success");
  error.classList.add("error");
};

const showSuccess = () => {
  const error = document.getElementById('error-message');
  error.classList.remove("error");
  error.classList.add("success");
};

const searchCity = async () => {
  const input = document.getElementById("search-box");
  const cityName = input.value;

  // Make the HTTP request 
  try {
    const response = await fetch(`${API_URL}/current.json?key=${API_KEY}&q=${cityName}`);
    
    if (!response.ok) {
      showError();
      throw new Error('Network response was not ok.');
    }

    showSuccess();
    const data = await response.json(); 

    const weatherInfoElement = document.getElementById("weather-info");
    weatherInfoElement.innerHTML = `
      <div class="header-card">
        <i class="fa-solid fa-location-dot fa-xl" style="color: #ffffff;"></i>
        <h2 class="location-city">${cityName}</h2>
      </div>
      <h2 class="day">${data.current.last_updated}</h2>
      <img class="weatherImage" src="${data.current.condition.icon}" width="644" height="387" alt="weather icon">
      <h2 class="temperature">${data.current.temp_c}°C || ${data.current.temp_f}°F</h2>
      <hr class="divider">
      <div class="data">
        <div class="humidity">
          <h2>Humidity</h2>
          <p>${data.current.humidity} %</p>
          <i class="fas fa-smog fa-xl"></i>
        </div>
        <div class="precipitation">
          <h2>Precipitation</h2>
          <p>${data.current.precip_mm} mm</p>
          <i class="fas fa-cloud-showers-heavy fa-xl"></i>
        </div>
        <div class="air-quality">
          <h2>Uv Index</h2>
          <p>${data.current.uv}</p>
          <i class="fa-solid fa-sun fa-xl"></i>
        </div>
      </div>
    `;

    input.value = '';
  } catch (error) {
    console.error('Error fetching global weather data:', error);
  }
};


