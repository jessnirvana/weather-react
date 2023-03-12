import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import Weather from "./Weather";
import App from "./App";

import "./Weather.css";
import "./index.css";
import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
      <App />
    </div>
  </StrictMode>
);
