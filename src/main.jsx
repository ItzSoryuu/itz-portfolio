import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const storedTheme = localStorage.getItem("theme");

if (storedTheme === "dark" || storedTheme === null) {
  document.documentElement.classList.add("dark");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);