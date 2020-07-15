import React, { useState, useEffect } from "react";
import axios from "axios";
import Dog from "./Dog";

const AllDogs = (props) => {
  const [dogs, setDogs] = useState([]);

  const fetchDawgs = () => {
    axios
      .get("http://localhost:8000/api/dogs")
      .then((res) => {
        setDogs(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchDawgs();
  }, [props]);

  return (
    <div className="text-dark">
      {dogs.map((x) => (
        <Dog key={x._id} dog={x} edit={(_id) => props.edit(_id)} />
      ))}
    </div>
  );
};

export default AllDogs;
