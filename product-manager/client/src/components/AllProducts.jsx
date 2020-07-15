import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const AllProducts = (props) => {
  const [products, setProducts] = useState([]);

  const getProductsAPI = () => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data);
        getProductsAPI();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductsAPI();
  }, [props]);

  return (
    <div>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={i}>
              <th scope="row">{i}</th>
              <td>{product.title}</td>
              <td>
                <Link to={`/products/${product._id}`}> View </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
