import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Link } from "@reach/router";
import Form from "./components/Form";
import AllProducts from "./components/AllProducts";
import Product from "./components/Product";

const test = {
  fontSize: "16px",
};

function App() {
  return (
    <div className="App container">
      <h1 className="text-center">Product Manager</h1>
      <AllProducts />
      <Link to="/new" className="btn btn-primary">
        Add Product
      </Link>
      <Router>
        <Form path="/new" />
        <Product path="/products/:id" />
      </Router>
    </div>
  );
}

export default App;
