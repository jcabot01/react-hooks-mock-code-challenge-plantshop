import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

// create search state, pass it down to search component
//requires State, this state affects the State of the Plants from the GET...
//need to filter and convert toLowerCase()



function PlantPage() {
  const [plants, setPlants] = useState([]); //set plants state here
  const [search, setSearch] = useState(""); //search state here 

  useEffect(()=> {
    fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then((plant) => setPlants(plant))
  }, [])

  function onPlantFormSubmit(newPlant) {
    setPlants([...plants, newPlant])
  }

  const filteredPlants = plants.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm onPlantFormSubmit={onPlantFormSubmit} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
