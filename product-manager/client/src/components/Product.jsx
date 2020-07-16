import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

// Styling
const productStyle = {
  padding: "20px",
  marginTop: "30px",
};

const Product = (props) => {
  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.price);
  const [description, setDescription] = useState(props.description);
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getOneProduct();
  });

  const getOneProduct = () => {
    axios
      .get(`http://localhost:8000/api/products/${props.id}`)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  };

  const deleteProduct = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/api/products/${props.id}`)
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
    <div className="container bg-light" style={productStyle}>
      <h1>Title: {title}</h1>
      <p>Price: ${price}</p>
      <p>Description: {description}</p>
      <Link to={`/edit/${props.id}`} className="btn btn-success">
        Edit Product
      </Link>
      <button
        className="btn btn-danger float-right"
        type="submit"
        onClick={deleteProduct}
      >
        Delete Product
      </button>
    </div>
  );
};

export default Product;
