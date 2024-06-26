import WEATHER_API_KEY from "./apikey.js";

const apiKey=WEATHER_API_KEY;
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const weatherIcon= document.querySelector(".weather-icon");


async function checkWeather(city){
    try{
        const response= await fetch(apiURL + city + `&appid=${apiKey}`);
        if(response.status==404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }else{
            var data = await response.json();

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
            document.querySelector(".weather").style.display="block"
            document.querySelector(".error").style.display="none";

        }
    
        
        
    }catch (error) {
        console.error("Error fetching weather data:", error);
    }
    
}

searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

