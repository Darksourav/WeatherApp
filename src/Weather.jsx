import React, { useState, useEffect } from "react";
import "./Weather.css";
import search_icon from "./assets/search.png";
import clear_icon from "./assets/clear.png";
import cloud_icon from "./assets/cloud.png";
import drizzle_icon from "./assets/drizzle.png";
import rain_icon from "./assets/rain.png";
import snow_icon from "./assets/snow.png";
import wind_icon from "./assets/wind.png";
import humidity_icon from "./assets/humidity.png";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  let api_key = "af3df4e7216c41dc771551358ae5aa36";

  const [wicon, setWicon] = useState(cloud_icon);

  const fetchWeatherData = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    setWeatherData(data);
  };

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return;
    }
    fetchWeatherData(element[0].value);
  };

  useEffect(() => {
    fetchWeatherData("India");
  }, []);

  useEffect(() => {
    if (weatherData) {
      if (weatherData.weather[0].icon === "01d" || weatherData.weather[0].icon === "01n") {
        setWicon(clear_icon);
      } else if (
        weatherData.weather[0].icon === "02d" ||
        weatherData.weather[0].icon === "02n"
      ) {
        setWicon(cloud_icon);
      } else if (
        weatherData.weather[0].icon === "03d" ||
        weatherData.weather[0].icon === "03n"
      ) {
        setWicon(drizzle_icon);
      } else if (
        weatherData.weather[0].icon === "04d" ||
        weatherData.weather[0].icon === "04n"
      ) {
        setWicon(drizzle_icon);
      } else if (
        weatherData.weather[0].icon === "07d" ||
        weatherData.weather[0].icon === "07n"
      ) {
        setWicon(drizzle_icon);
      } else if (
        weatherData.weather[0].icon === "10d" ||
        weatherData.weather[0].icon === "10n"
      ) {
        setWicon(rain_icon);
      } else if (
        weatherData.weather[0].icon === "13d" ||
        weatherData.weather[0].icon === "13n"
      ) {
        setWicon(snow_icon);
      } else {
        setWicon(clear_icon);
      }
    }
  }, [weatherData]);

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      {weatherData && (
        <>
          <div className="weather-image">
            <img src={wicon} alt="" />
          </div>
          <div className="weather-temp">{weatherData.main.temp}°c</div>
          <div className="weather-location">{weatherData.name}</div>
          <div className="data-container">
            <div className="element">
              <img src={humidity_icon} alt="" className="icon" />
              <div className="data">
                <div className="humidity-percent">
                  {weatherData.main.humidity}%
                </div>
                <div className="text">Humidity</div>
              </div>
            </div>
            <div className="element">
              <img src={wind_icon} alt="" className="icon" />
              <div className="data">
                <div className="wind-rate">{weatherData.wind.speed} km/h</div>
                <div className="text">Wind speed</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
