/*require("dotenv").config();
const apiKey= process.env.WEATHER_API_KEY;
idk how to hide this api key help above code isnot working*/

const apiKey="";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const weatherIcon= document.querySelector(".weather-icon");


async function checkWeather(city){
    try{
        const response= await fetch(apiURL + city + `&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= parseInt(data.main.temp) + '°c';
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
        document.querySelector(".wind").innerHTML= Math.ceil(data.wind.speed) + ' km/h';

        if(data.weather[0].main=="Clouds"){
        weatherIcon.src= "images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
        weatherIcon.src= "images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
        weatherIcon.src= "images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src= "images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
        weatherIcon.src= "images/mist.png";
        }
    }catch (error) {
        console.error("Error fetching weather data:", error);
    }
    
}

searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

