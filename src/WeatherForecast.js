import React from "react";
import "./WeatherForecast.css";

import axios from "axios";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "281450ec88936f4fa8ee9864682b49a0";
  let longitude = props.coords.lon;
  let latitude = props.coords.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div> Icon
          <span className="forecast-temperature-max">19° </span>
          <span className="forecast-temperature-min">9° </span>
        </div>
      </div>
    </div>
  );
}
