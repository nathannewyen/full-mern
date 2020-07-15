import React, { useEffect } from "react";
import axios from "axios";

const Product = (props) => {
  // const [title, setTitle] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${props._id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h4>{props.message}</h4>
    </div>
  );
};

export default Product;
