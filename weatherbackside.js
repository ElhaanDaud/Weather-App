//*require("dotenv").config();
//*process.env.WEATHER_APP_API_KEY
const apiKey="";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather(){
    const response= await fetch(apiURL+'&appid=${apiKey}');
    var data = await response.json();

    console.log(data);
}

checkWeather()