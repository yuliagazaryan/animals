import React from "react";
import { useParams } from "react-router-dom";

const AnimalSingle = () => {
  let { animal } = useParams();
  return <div>This is the page for {animal}</div>;
};

export default AnimalSingle;
