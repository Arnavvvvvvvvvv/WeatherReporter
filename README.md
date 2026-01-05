# 🌤️ WeatherReporter

A weather forecast web application built using **Node.js, Express, and EJS**.  
It fetches real-time weather data using the **OpenWeatherMap API** and displays it in a clean, user-friendly UI.

## ✨ Features

- 🔍 Search weather by city name  
- 🌡️ Current temperature and feels-like temperature  
- 📍 Latitude and longitude  
- 💧 Humidity  
- 🌬️ Wind speed  
- 📊 Pressure  
- 🌅 Sunrise and 🌇 Sunset time  
- 💡 Smart weather-based suggestions  
- ❌ Error handling for invalid cities  

## 🛠️ Tech Stack

- 🟢 Node.js  
- ⚡ Express.js  
- 🔗 Axios  
- 🧩 EJS  
- 🎨 HTML & CSS  
- ☁️ OpenWeatherMap API  

## 📁 Project Structure
WeatherReporter/
├── public/
│ ├── style.css
├── views/
│ └── index.ejs
├── index.js
├── package.json

## How to Run

1. Install dependencies  
   npm install

2. Add your OpenWeatherMap API key in `index.js`  
   const API_KEY = "YOUR_API_KEY";

3. Start the server  
   nodemon index.js  
   or  
   node index.js

4. Open in browser  
   weatherreporter.onrender.com

---

## Usage

- Enter a city name in the search box.
- Click **Go** to fetch weather data.
- View temperature, weather conditions, and suggestions.
- Background animation updates based on weather.
- Date and time are displayed at the top.

---

## Notes

- Internet connection is required to fetch weather data.
- If an invalid city is entered, an error message is shown.
- Weather suggestions are based on temperature and conditions.

---

## License

This project is for **educational purposes only**.

---

## Author

Arnav Jain
