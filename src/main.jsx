import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import * as atatus from "atatus-spa";
atatus.config("9d866daa1c834bb28981071252c2620a").install();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

atatus.notify(new Error("Test Atatus Setup"));
