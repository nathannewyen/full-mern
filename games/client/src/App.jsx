import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { navigate } from "@reach/router";

function App() {
  const [games, setGames] = useState([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = () => {
    axios
      .get(`http://localhost:8000/games`)
      .then((res) => {
        setGames(res.data);
      })
      .catch((err) => console.log(err));
  };

  const addGame = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/games", { title, genre })
      .then((res) => {
        fetchGames();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      {games.map((game, i) => (
        <p key={i}>
          {game.title} | {game.genre}
        </p>
      ))}

      <form onSubmit={addGame}>
        <label htmlFor="title">Title:</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="title">Genre:</label>
        <input type="text" onChange={(e) => setGenre(e.target.value)} />
        <button type="submit" className="btn btn-primary">
          Add Game
        </button>
      </form>
    </div>
  );
}

export default App;
