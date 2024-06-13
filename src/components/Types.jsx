import React, { useState, useEffect } from "react";
import { getTypes } from "../../api";

const Types = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getTypes().then((types) => {
      setTypes(types);
    });
  }, [types]);

  if (!types) {
    return <h3>Loading...</h3>;
  } else {
    return (
      <div>
        <h2>Types</h2>
        <ul>
          {types.map((type) => (
            <li key={type.id}>{type.title}</li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Types;
