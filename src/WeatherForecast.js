import React from "react";
import WeatherInfo from "./WeatherInfo";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">Thu <WeatherInfo {props.data.iconUrl} /> 19 10</div>
      </div>
    </div>
  );
}
