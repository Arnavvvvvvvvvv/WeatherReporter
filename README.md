🌤️ WeatherReporter

A modern weather forecast web application that displays real-time weather data for any city using the OpenWeatherMap API.
The app includes contextual suggestions, animated backgrounds based on weather, and a clean responsive UI.

✨ Features

🔍 Search weather by city name

🌡️ Temperature & feels-like temperature

📍 Latitude & longitude

💧 Humidity, 🌬️ wind speed, 📊 pressure

🌅 Sunrise & 🌇 sunset time

💡 Smart weather suggestions

🎨 Weather-based animated background

⏰ Current date & time (HH:MM)

📌 Sticky footer

❌ User-friendly error handling

🛠️ Tech Stack

Node.js

Express.js

Axios

EJS

HTML / CSS (Flexbox & animations)

OpenWeatherMap API

📁 Project Structure
WeatherReporter/
├── public/
│   ├── style.css
│   └── weather-bg.js
├── views/
│   └── index.ejs
├── index.js
├── package.json
└── README.md

🔑 API Setup

This project uses the OpenWeatherMap API.

Sign up at https://openweathermap.org

Go to My API Keys

Generate an API key

Wait 5–10 minutes for activation

▶️ How to Run Locally
1️⃣ Clone the repository
git clone <your-repo-url>
cd WeatherReporter

2️⃣ Install dependencies
npm install

3️⃣ Add API Key

In index.js:

const API_KEY = "YOUR_API_KEY_HERE";

4️⃣ Start the server
nodemon index.js


or

node index.js

5️⃣ Open in browser
http://localhost:3000

🧠 How It Works

User enters a city name

Server fetches weather data using Axios

Data is processed on backend

EJS dynamically renders the UI

Background animation updates based on weather

🎓 Learning Highlights

API integration with Axios

Server-side rendering using EJS

Express middleware (urlencoded)

Conditional UI rendering

Responsive layout using Flexbox

Clean error handling & UX

📄 License

This project is for educational purposes only.

🙌 Author

Built by Arnav Jain
⭐ If you like this project, give it a star on GitHub!
