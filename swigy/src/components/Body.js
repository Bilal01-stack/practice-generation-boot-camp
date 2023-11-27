import React, { useState } from "react";
import RestauantCard from "./Restaurant";
import { restaurantList } from "../constants";

export default function Body() {
  const [search, setSearch] = useState('');
  const [restaurants, setRestaurants] = useState(restaurantList);

  function result(search, restaurants) {
    const resultData =  restaurants.filter((restaurant) => 
      restaurant.data.name.includes(search));
      return resultData
  }
  
  return (
    <>
      <div>
        <input
          className="border-2 m-2"
          value={search}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-green-300 ml-4 p-1 rounded"
          onClick={() => {
            const data = result(search, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex gap-x-4 gap-y-4 flex-wrap">
        {restaurants.map((restaurant) => (
          <RestauantCard {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
    </>
  );
}
