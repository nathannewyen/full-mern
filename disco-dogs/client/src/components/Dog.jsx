import React from "react";
import { Link } from "@reach/router";

const cardStyle = {
  marginRight: "10px",
  marginTop: "10px",
};

const Dog = (props) => {
  return (
    <div className="card mb-3 col-sm-2 d-inline-block" style={cardStyle}>
      <div className="card-body">
        <h4 className="card-title">{props.dog.name}</h4>
        <p className="card-text">Breed: {props.dog.breed}</p>
        <p className="card-text">Age: {props.dog.age}</p>
        <Link to={`/edit/${props.dog._id}`}>Edit</Link>
      </div>
    </div>
  );
};

export default Dog;
