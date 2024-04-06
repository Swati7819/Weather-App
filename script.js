
const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3675eafe80mshb783ae13efda2fap181e97jsn2087154a395b",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  
  let url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
  
  async function getWeather() {
    try {
      let cityInput = document.getElementById("city");
      let city = cityInput.value.trim(); // Trim to remove leading/trailing spaces
      if (!city) city = "Delhi"; // Set default city if input is empty
      document.getElementById("show_city").innerHTML = city;
      let baseUrl = url + city;
      const response = await fetch(baseUrl, options);
      const result = await response.json();
      main(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  function main(result) {
    try {
      // Accessing data from the result object
      let cloud_pct = result.cloud_pct;
      let feels_like = result.feels_like;
      let humidity = result.humidity;
      let humidity2 = result.humidity;
      let max_temp = result.max_temp;
      let min_temp = result.min_temp;
      let sunrise = result.sunrise;
      let sunset = result.sunset;
      let temp = result.temp;
      let temp2 = result.temp;
      let wind_speed = result.wind_speed;
      let wind_speed2 = result.wind_speed;
  
      // Updating HTML elements with retrieved data
      document.getElementById("temp").textContent = temp;
      document.getElementById("temp2").textContent=temp;
      document.getElementById("cloud_pct").textContent = cloud_pct;
      document.getElementById("feels_like").textContent = feels_like;
      document.getElementById("humidity").textContent = humidity;
      document.getElementById("humidity2").textContent = humidity;
      document.getElementById("max_temp").textContent = max_temp;
      document.getElementById("min_temp").textContent = min_temp;
      document.getElementById("sunrise").textContent = sunrise;
      document.getElementById("sunset").textContent = sunset;
      document.getElementById("wind_speed").textContent = wind_speed;
      document.getElementById("wind_speed2").textContent = wind_speed;
  
      console.log(result); // Logging the entire result object
    } catch (error) {
      console.error(error);
    }
  }
  
  // Event listener for form submission
  document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();//prevent reloading of page
    getWeather();
  });
  
  // Fetch weather for common places
  async function display(city) {
    try {
      let baseUrl = url + city;
      const response = await fetch(baseUrl, options);
      const result = await response.json();
      // Update HTML elements with retrieved weather data
      document.getElementById(`${city}_cloud_pct`).textContent = result.cloud_pct;
      document.getElementById(`${city}_feels_like`).textContent = result.feels_like;
      document.getElementById(`${city}_humidity`).textContent = result.humidity;
      document.getElementById(`${city}_max_temp`).textContent = result.max_temp;
      document.getElementById(`${city}_min_temp`).textContent = result.min_temp;
      document.getElementById(`${city}_sunrise`).textContent = result.sunrise;
      document.getElementById(`${city}_sunset`).textContent = result.sunset;
      document.getElementById(`${city}_temp`).textContent = result.temp;
      document.getElementById(`${city}_wind_speed`).textContent = result.wind_speed;
      
    } catch (error) {
      console.error(error);
    }
  }
  
  // Array of common places
  let commonPlaces = ["Shanghai", "New York", "London", "Boston", "Bangalore", "Kolkata"];
  
  // Fetch weather for common places
  commonPlaces.forEach((city) => {
    display(city);
  });
  
  // Call getWeather when the page loads
  window.onload = function () {
    getWeather();
  };



  



  
