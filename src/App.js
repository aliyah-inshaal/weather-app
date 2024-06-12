import "./App.css";
import { useState } from "react";

const api = {
  key: "e013e181b3d0c9159c68388e9a0a9cb8",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };

  return (
    <div className="App">
      {/* header */}
      <h1>Weather App</h1>
      <div>
        {/* searchbox */}
        <input 
          className="AppInput"
          type="text"
          placeholder="Enter city"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* button */}
        <button className="App-button" onClick={searchPressed}>Search</button>
      </div>

      {typeof weather.main !== "undefined" ? (
        <div className="weather-result">
          {/* location */}
          <p className="city-name">{weather.name}</p>
          {/* temperature */}
          <p className="temperature">{weather.main.temp}°C</p>
          {/* condition */}
          <p className="condition">{weather.weather[0].main}</p>
          <p className="description">({weather.weather[0].description})</p>
        </div>
      ) : (
        " "
      )}
    </div>
  );
}

export default App;
