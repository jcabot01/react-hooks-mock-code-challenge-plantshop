import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  //Not a PATCH, but State.   button onClick(() => if true ? show "out of stock" : "in stock"  )
  const [isInStock, setIsInStock] = useState(true)
  
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={() => setIsInStock(false)} >In Stock</button>
      ) : (
        <button onClick={() => setIsInStock(true)} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
