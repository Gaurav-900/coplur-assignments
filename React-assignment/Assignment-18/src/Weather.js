import React, { useState, useEffect } from 'react';

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch current weather from free Open-Meteo API for London (latitude=51.5, longitude=-0.12)
    fetch('https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true')
      .then((res) => res.json())
      .then((data) => {
        setWeather(data.current_weather);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ border: '1px solid #007bff', padding: '20px', margin: '20px 0', borderRadius: '6px', backgroundColor: '#eef7ff' }}>
      <h3 style={{ color: '#0056b3' }}>Weather Dashboard</h3>
      {loading ? (
        <p>Loading weather data...</p>
      ) : weather ? (
        <div>
          <h4>City: London</h4>
          <p><strong>Temperature:</strong> {weather.temperature} °C</p>
          <p><strong>Wind Speed:</strong> {weather.windspeed} km/h</p>
          <p><strong>Wind Direction:</strong> {weather.winddirection}°</p>
        </div>
      ) : (
        <p>Failed to load weather data.</p>
      )}
    </div>
  );
}

export default Weather;
