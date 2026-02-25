Weather App (React)

A simple and responsive Weather Application built using React.js that allows users to check real-time weather information for any city worldwide.

🚀 Features

🔍 Search weather by city name

🌡️ Display temperature in Celsius (°C) and Fahrenheit (°F)

☁️ Shows weather condition (Cloudy, Rainy, Clear, etc.)

🔄 Toggle between °C and °F

⚡ Real-time weather data using API

📱 Responsive UI

⏳ Loading and error handling

🛠️ Tech Stack

React.js

JavaScript (ES6)

CSS

OpenWeatherMap API

Vite / Create React App

📂 Project Structure
weather-app/
│
├── public/
│
├── src/
│   ├── components/
│   │   └── Weather.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/weather-app.git
2️⃣ Navigate to Project Folder
cd weather-app
3️⃣ Install Dependencies
npm install
4️⃣ Get Weather API Key

Go to 👉 https://openweathermap.org/api

Create a free account

Generate an API key

5️⃣ Add API Key

Inside your component:

const API_KEY = "YOUR_API_KEY";
6️⃣ Run the App
npm run dev

or

npm start

App will run on:

http://localhost:5173
🌐 API Used

OpenWeatherMap API

Example Request:

https://api.openweathermap.org/data/2.5/weather?q=London&appid=API_KEY&units=metric
🖼️ Application Preview

Search any city

View temperature

Check weather condition instantly

🔮 Future Improvements

📍 Current location weather

🌙 Dark / Light mode

📅 5-day forecast

🎨 Better UI animations

🤝 Contributing

Contributions are welcome!

Fork the project

Create your feature branch

Commit changes

Push to branch

Open Pull Request

📄 License

This project is licensed under the MIT License.

👨‍💻 Author

Developed by Himanshu
