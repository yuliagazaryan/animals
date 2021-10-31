import React from "react";

const AnimalsCard = (props) => {
  return (
    <div className="card">
      <img src={`https://source.unsplash.com/1600x900/?${props.name}`} />
      <h2>{props.name}</h2>
    </div>
  );
};

export default AnimalsCard;
