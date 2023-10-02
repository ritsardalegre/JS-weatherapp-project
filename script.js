const apiKey = "a8adc45b90b690fc6e4853019e75022b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404){
        document.querySelector(".error").style.display= "block";
        document.querySelector(".weather").style.display= "none";
    }
    else {
        var data = await response.json();

    console.log(data);

    const city_place = document.querySelector(".city");
    const temp = document.querySelector(".temp");
    const humidity = document.querySelector(".humidity");
    const wind = document.querySelector(".wind");
    const weather = document.querySelector(".weather");
    
    
    city_place.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°c";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";

    // if (data.weather[0].main== "Clouds"){
    //     weatherIcon.src = "images/clouds.png";
    // } else if (data.weather[0].main== "Clear"){
    //     weatherIcon.src = "images/clear.png";
    // }else if (data.weather[0].main== "Rain"){
    //     weatherIcon.src = "images/rain.png";
    // }else if (data.weather[0].main== "Drizzle"){
    //     weatherIcon.src = "images/drizzle.png";
    // }else if (data.weather[0].main== "Mist"){
    //     weatherIcon.src = "images/mist.png";
    // }

    switch (data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;
        case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
        default:
            console.log("Error Weather");
        
    }

    // document.querySelector(".weather").style.display = "block";
    weather.style.display = "block";
    // console.dir(weather);
    document.querySelector(".error").style.display= "none";
    
    }
    
}   

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
