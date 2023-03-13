import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Jessica Monge and is{" "}
          <a
            href="https://github.com/jessnirvana/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open source on GitHub
          </a>{" "}
          and{" "}
          <a href="https://master--shimmering-cascaron-e4d694.netlify.app/">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
