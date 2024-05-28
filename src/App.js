// src/App.js
import React from "react";
import { useTheme } from "./store/card-sontext-api";
import "./App.css";
import Card from "./component/Card";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        <Card
          title="Card Title"
          content="This is an example of a card content. It adjusts according to the theme."
        />
      </header>
    </div>
  );
}

export default App;
