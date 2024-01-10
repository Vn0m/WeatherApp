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

API_KEY = ""
API_URL = "http://api.weatherapi.com/v1"
defaultLocation = "New York"



    // Make the HTTP request 
    fetch(`${API_URL}/current.json?key=${API_KEY}&q=${defaultLocation}`)
      .then(response => response.json())
      .then(data => {
        // Handle the response data here
        console.log('Global Weather Information:', data);
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching global weather data:', error);
      });

