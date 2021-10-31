import React from "react";
import { animals } from "./animals";
import AnimalsCard from "./AnimalsCard";

const AnimalsList = () => {
  return (
    <div className="animalsList">
      {animals.map((item) => (
        <AnimalsCard key={item.name} name={item.name} />
      ))}
    </div>
  );
};

export default AnimalsList;
