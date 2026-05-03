import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DecisionProvider } from "./context/DecisionContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DecisionProvider>
        <App />
      </DecisionProvider>
    </BrowserRouter>
  </React.StrictMode>
);