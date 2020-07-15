import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import AllProducts from "./components/AllProducts";

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Product Manager</h1>
      <AllProducts />
      <Form />
    </div>
  );
}

export default App;
