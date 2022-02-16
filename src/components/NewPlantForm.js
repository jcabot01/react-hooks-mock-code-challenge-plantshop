import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewPlantForm({ onPlantFormSubmit }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const addNewPlant = {
      id: uuid(),
      name: name,
      image: image,
      price: price,
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(addNewPlant),
    })
      .then((res) => res.json())
      .then((newPlant) => onPlantFormSubmit(newPlant))
  }
  
  function handleName(e) {
    setName(e.target.value)
  }

  function handleImage(e) {
    setImage(e.target.value)
  }

  function handlePrice(e) {
    setPrice(e.target.value)
  }

  //add onSubmit to form
  //add onChange to each input field

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={handleName} />
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={handleImage}/>
        <input type="text" name="price" placeholder="$ Price" value={price} onChange={handlePrice} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
