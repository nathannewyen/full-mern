import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Link } from "@reach/router";
import AllDogs from "./components/AllDogs";
import NewDog from "./components/NewDog";

const buttonStyle = {
  marginLeft: "10px",
};

function App() {
  return (
    <div className="container-fluid">
      <h1>Disco Dawgs</h1>
      <nav>
        <Link to="/">
          <button className="btn btn-primary">Home</button>
        </Link>
        <Link to="/new">
          <button className="btn btn-primary" style={buttonStyle}>
            New Dog
          </button>
        </Link>
      </nav>

      <Router>
        <AllDogs path="/" />
        <NewDog path="/new" />
      </Router>
    </div>
  );
}

export default App;
