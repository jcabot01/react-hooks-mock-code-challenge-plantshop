import React from "react";
import PlantCard from "./PlantCard";


//pass down plants state here
function PlantList({ plants }) {
//map over plant State to render card, pass down into PlantCard component as props
  const plantObjs = plants.map((plant) => (
    <PlantCard
        key = {plant.id}
        name = {plant.name}
        image = {plant.image}
        price = {plant.price}
    />
  ))


  return (
    <ul className="cards">{plantObjs}</ul>
  );
}

export default PlantList;
