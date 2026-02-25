import { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

/* 🔑 Put your OpenWeather API key here */
const API_KEY = "79f1754942e9d5c4826bc2d62c4d9dd7";

function App() {
  // Controlled input
  const [cityInput, setCityInput] = useState("");

  // Weather data
  const [weather, setWeather] = useState(null);

  // UI states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Temperature unit
  const [unit, setUnit] = useState("C");

  // Recent searches
  const [recentCities, setRecentCities] = useState([]);

  // Trigger API
  const [searchCity, setSearchCity] = useState("");

  /* =========================
     API CALL using useEffect
  ==========================*/
  useEffect(() => {
    if (!searchCity) return;

    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
          throw new Error("City not found");
        }

        const data = await response.json();

        setWeather({
          city: data.name,
          temperature: data.main.temp,
          condition: data.weather[0].main,
          icon: data.weather[0].icon,
        });

        // Save last 5 searches
        setRecentCities((prev) => {
          const updated = [
            searchCity,
            ...prev.filter((c) => c !== searchCity),
          ];
          return updated.slice(0, 5);
        });
      } catch (err) {
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [searchCity]);

  /* Search */
  const handleSearch = () => {
    if (!cityInput.trim()) return;
    setSearchCity(cityInput);
    setCityInput("");
  };

  /* Toggle Celsius ↔ Fahrenheit */
  const toggleUnit = () => {
    setUnit((prev) => (prev === "C" ? "F" : "C"));
  };

  return (
    <div className="app">
      <h1>🌦 Simple Weather Checker</h1>

      {/* Search Section */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city..."
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>

        <button className="toggle" onClick={toggleUnit}>
          °{unit}
        </button>
      </div>

      {/* UI STATES */}
      {loading && <p>Fetching weather...</p>}
      {error && <p className="error">{error}</p>}
      {!weather && !loading && !error && (
        <p>Search a city to check weather 🌍</p>
      )}

      {/* Weather Card */}
      {weather && <WeatherCard weather={weather} unit={unit} />}

      {/* Recent Searches */}
      {recentCities.length > 0 && (
        <div className="recent">
          <h3>Recent Cities</h3>

          {recentCities.map((city, index) => (
            <button key={index} onClick={() => setSearchCity(city)}>
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;