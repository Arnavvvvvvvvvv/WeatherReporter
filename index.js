import express from "express" 
import axios from "axios"

const app= express();
const port= 3000
app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));

const now = new Date();
const currentDate = now.toLocaleDateString("en-IN", {
  timeZone: "Asia/Kolkata",
  weekday: "short",
  day: "numeric",
  month: "short",
  year: "numeric"
});
const currentTime = now.toLocaleString("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit"
});

const API_URL= "https://api.openweathermap.org/data/2.5";
const API_KEY= "355a019e33acc5fb7b9343ca29050d60"

app.get("/", (req,res)=>{
    res.render("index", {weather:null, error:null, date: currentDate, time: currentTime});
})

app.post("/weather", async (req,res)=>{
    const city= req.body.city;
    if(!city){
        return res.render("index", {
            weather: null,
            error: "Please enter a city name",
            date: currentDate, time: currentTime
        })
    }

    try {
    const response = await axios.get(
      `${API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    console.log(response);

let suggestion = "";
// Rain / Thunder
if (response.data.weather[0].main === "Rain") {
  suggestion = "☔ Carry an umbrella";
} 
else if (response.data.weather[0].main === "Thunderstorm") {
  suggestion = "⛈️ Stay indoors and avoid open areas";
} 
// Clear / Hot
else if (response.data.weather[0].main === "Clear" && response.data.main.temp >= 35) {
  suggestion = "🔥 Avoid going out in the afternoon";
}
else if (response.data.weather[0].main === "Clear" && response.data.main.temp > 30) {
  suggestion = "💧 Stay hydrated";
}
else if (response.data.weather[0].main === "Clear") {
  suggestion = "😎 Great day to be outside";
}
// Cloudy / Wind
else if (response.data.weather[0].main === "Clouds" && response.data.wind.speed > 6) {
  suggestion = "🌬️ It’s windy—secure loose items";
}
else if (response.data.weather[0].main === "Clouds") {
  suggestion = "☁️ Pleasant cloudy weather";
}
// Snow / Cold
else if (response.data.weather[0].main === "Snow") {
  suggestion = "❄️ Wear heavy winter clothing";
}
else if (response.data.main.temp < 10) {
  suggestion = "🧥 Dress warmly, it's very cold";
}
else if (response.data.main.temp < 15) {
  suggestion = "🧣 Light jacket recommended";
}
// Fog / Mist / Haze
else if (["Mist", "Fog", "Haze"].includes(response.data.weather[0].main)) {
  suggestion = "🚗 Drive carefully, low visibility";
}
// Default
else {
  suggestion = "Have a great day😊";
}


const weatherData = {
  city: response.data.name,
  country: response.data.sys.country,

  latitude: response.data.coord.lat,
  longitude: response.data.coord.lon,

  temperature: response.data.main.temp,
  feelsLike: response.data.main.feels_like,
  humidity: response.data.main.humidity,
  mintemp: response.data.main.temp_min,
  maxtemp: response.data.main.temp_max,
  pressure: response.data.main.pressure,

  condition: response.data.weather[0].main,
  description: response.data.weather[0].description,
  icon: response.data.weather[0].icon,

  windSpeed: response.data.wind.speed,

  sunrise: new Date(response.data.sys.sunrise * 1000).toLocaleTimeString(),
  sunset: new Date(response.data.sys.sunset * 1000).toLocaleTimeString(),

  suggestion: suggestion   
};

    res.render("index", { weather: weatherData, error: null, date: currentDate, time: currentTime });
    }catch (error) {
    res.render("index", {
      weather: null,
      error: "City not found or weather service unavailable"
    });
    }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);

});
