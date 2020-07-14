import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Edit = (props) => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = () => {
    axios
      .get(`http://localhost:8000/games/${props.id}`)
      .then((res) => {
        setTitle(res.data.title);
        setGenre(res.data.genre);
      })
      .catch((err) => console.log(err));
  };

  const updateGame = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/games/${props.id}`, { title, genre })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={updateGame}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label htmlFor="title">Genre:</label>
      <input
        type="text"
        onChange={(e) => setGenre(e.target.value)}
        value={genre}
      />

      <button type="submit" className="btn btn-primary">
        Edit
      </button>
    </form>
  );
};

export default Edit;
