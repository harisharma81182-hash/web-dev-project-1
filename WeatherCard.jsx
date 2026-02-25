const getEmoji = (condition) => {
  switch (condition) {
    case "Clear":
      return "☀️";
    case "Clouds":
      return "☁️";
    case "Rain":
      return "🌧️";
    case "Snow":
      return "❄️";
    case "Thunderstorm":
      return "⛈️";
    case "Mist":
      return "🌫️";
    default:
      return "🌤️";
  }
};

function WeatherCard({ weather, unit }) {
  // Convert temperature
  const temperature =
    unit === "C"
      ? weather.temperature
      : (weather.temperature * 9) / 5 + 32;

  return (
    <div className="weather-card">
      <div className="emoji">{getEmoji(weather.condition)}</div>

      <h2>{weather.city}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt="weather"
      />

      <h1>
        {temperature.toFixed(1)}°{unit}
      </h1>

      <p>{weather.condition}</p>
    </div>
  );
}

export default WeatherCard;