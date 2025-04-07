import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import * as atatus from "atatus-spa";
atatus.config("4dfc8db270b0428e906a306f8b8df490").install();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

atatus.notify(new Error("Test Atatus Setup"));
