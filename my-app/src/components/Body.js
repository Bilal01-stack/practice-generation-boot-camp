import React, { useState,useContext } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";



const RestaurantCards = ({ text, link }) => {
  return (
    <div className="card">
      <h2>{text}</h2>
      <p>{link}</p>
    </div>
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const restaurants = useRestaurantMenu(); // Renamed variable
  
  const isOnline = useOnline();
  if(!isOnline){
    return <h1>Check your internet connection</h1>
  }


  return restaurants === null ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant, index) => (
            <RestaurantCards {...restaurant} key={index} />
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </>
  );
};

export default Body;
