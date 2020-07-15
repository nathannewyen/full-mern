import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(1);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const addProduct = (e) => {
    e.preventDefault();
    const product = {
      title,
      price,
      description,
    };
    axios
      .post("http://localhost:8000/api/products", product)
      .then((res) => {
        if (res.data.errors) {
          setErrors(res.data.errors);
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h1>Form</h1>
      <form onSubmit={addProduct}>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            {errors.title ? (
              <p className="text-danger"> {errors.title.properties.message} </p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Price
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              placeholder="$"
            />
            {errors.price ? (
              <p className="text-danger"> {errors.price.properties.message} </p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            {errors.description ? (
              <p className="text-danger">
                {errors.description.properties.message}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
