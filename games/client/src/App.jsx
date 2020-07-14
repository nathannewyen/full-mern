import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Link } from "@reach/router";
import Games from "./components/Games";
import Form from "./components/Form";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="container">
      <Link to="/">All Games </Link>
      <Link to="/new">New</Link>
      <Router>
        <Games path="/" />
        <Form path="/new" />
        <Edit path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
