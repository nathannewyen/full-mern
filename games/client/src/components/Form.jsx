import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");

  const addGame = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/games", { title, genre })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={addGame}>
      <label htmlFor="title">Title:</label>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <label htmlFor="title">Genre:</label>
      <input type="text" onChange={(e) => setGenre(e.target.value)} />
      <button type="submit" className="btn btn-primary">
        Add Game
      </button>
    </form>
  );
};

export default Form;
