import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Games = (props) => {
  const [games, setGames] = useState([]);

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

  const remove = (e, i) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/games/${props.id}`)
      .then((res) => {
        fetchGames();
      })
      .catch((err) => console.log(err));
  };

  return (
    <table className="table table-bordered table-hover">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Action</th>
        </tr>
        {games.map((game, i) => (
          <tr key={i}>
            <td>{game.title}</td>
            <td>{game.genre}</td>
            <td>
              <Link to={"/edit/" + i}>Edit</Link>
              {" | "}
              <a href="#" onClick={(e) => remove(e, i)}>
                Delete
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Games;
