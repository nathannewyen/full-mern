import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const EditProduct = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(1);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${props.id}`)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, []);

  const editProduct = (e) => {
    e.preventDefault();
    const product = {
      title,
      price,
      description,
    };
    axios
      .put(`http://localhost:8000/api/products/${props.id}`, product)
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
      <h1> Edit Product Form </h1>
      <form onSubmit={editProduct}>
        <div className="form-group">
          <label> Name: </label>
          <input
            className="form-control"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          {errors.title ? (
            <p className="text-danger"> {errors.title.properties.message} </p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <label> Price: </label>
          <input
            className="form-control"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          {errors.price ? (
            <p className="text-danger"> {errors.price.properties.message} </p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <label> Description: </label>
          <input
            className="form-control"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          {errors.description ? (
            <p className="text-danger">
              {" "}
              {errors.description.properties.message}{" "}
            </p>
          ) : (
            ""
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
