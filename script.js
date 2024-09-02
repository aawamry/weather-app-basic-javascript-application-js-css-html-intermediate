const apiKey = "..."; //put your API key between the braces
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`)
    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{
        var data = await response.json();
        console.log(data)
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr"
    
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "imgs/clouds.png"
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "imgs/clear.png"
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "imgs/drizzle.png"
            }
            else if(data.weather[0].main == "Humidity"){
                weatherIcon.src = "imgs/humidity.png"
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "imgs/rain.png"
            }
            else if(data.weather[0].main == "Snow"){
                weatherIcon.src = "imgs/snow.png"
            }
            else if(data.weather[0].main == "Wind"){
                weatherIcon.src = "imgs/wind.png"
            }
        
            document.querySelector(".weather").style.display = "block";
        
    }
    }
    

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})
