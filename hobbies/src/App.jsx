import { useState } from "react";
import "./App.css";
import HobbyList from "./components/HobbyList";
import FavoriteHobbies from "./components/FavoriteHobbies";

function App() {
  return (
    <div className="app">
      <h1>My Hobbies</h1>
      <div className="hobby-form">
        <input
          type="text"
          placeholder="Enter a new hobby..."
          className="hobby-input"
        />
        <button onClick={handleAddHobby} className="save-button">
          Save
        </button>
      </div>

      <div className="container">
        <HobbyList />
        <FavoriteHobbies h />
      </div>
    </div>
  );
}

export default App;
