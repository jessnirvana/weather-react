import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a
            href="https://github.com/jessnirvana/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open Source
          </a>
          &nbsp; By Jessica Monge
        </footer>
      </div>
    </div>
  );
}
