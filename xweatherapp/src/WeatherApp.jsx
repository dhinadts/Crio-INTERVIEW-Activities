import React, { useState } from "react";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [city_name, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setLoader] = useState(false);

  const fetchWeather = async () => {
    if (!city_name) return;
    try {
      setLoader(true);
      const apiKey = "1f963741117b428fb0c154719252806";
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city_name}`
      );
      const data = await response.json();
      if (data.error) {
        alert(data.error.message);
        setLoader(false);
        return;
      }

      setWeatherData({
        temp: data.current.temp_c,
        humidity: data.current.humidity,
        condition: data.current.condition.text,
        wind: data.current.wind_kph,
      });
      setLoader(false);
    } catch (error) {
      console.error(error);
      alert("Error fetching weather data");
      setLoader(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        height: "100vh",
        padding: "20px",
      }}
    >
      {/* Search Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          placeholder="Enter city name"
          value={city_name}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button onClick={fetchWeather} style={{ padding: "10px 20px" }}>
          Search
        </button>
      </div>

      {/* Loader */}
      {isLoading && (
        <div className="weather-container">
          <p>Loading data...</p>
        </div>
      )}

      {/* Weather Cards */}
      {!isLoading && weatherData && (
        <div className="weather-container">
          <div className="weather-card">
            <p>Temperature</p>
            <p>{`${weatherData.temp} °C`}</p>
          </div>
          <div className="weather-card">
            <p>Humidity</p>
            <p>{`${weatherData.humidity} %`}</p>
          </div>
          <div className="weather-card">
            <p>Condition</p>
            <p>{weatherData.condition}</p>
          </div>
          <div className="weather-card">
            <p>Wind Speed</p>
            <p>{`${weatherData.wind} kph`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
