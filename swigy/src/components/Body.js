import React, { useEffect, useState } from "react";
import RestauantCard from "./Restaurant";
//import { restaurantList } from "../constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

export default function Body() {
  const [search, setSearch] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([])

  function result(search, allRestaurants) {
    const resultData =  allRestaurants.filter((restaurant) => 
      restaurant?.data?.name?.toLowerCase()?.includes(search.toLowerCase()));
      return resultData
  }
  
  useEffect(()=>{
    callAPi();
  }, []);


async function callAPi(){
   try{
     const response = await fetch("https://www.swiggy.com/api/seo/getListing?lat=11.352407603698884&lng=75.87227602079383");
     const json = await response.json()
     if(json.data && json.data.success){
      const cards = json.data.success.cards;
      //console.log(cards)
      const restaurants = cards[1].card.card.gridElements.infoWithStyle.restaurants;
      console.log(restaurants)
      const replaceDummy = restaurants.map((res)=> {
      return {
        data: {
          name: res.info?.name || "Default Name",
          cloudinaryImageId: res.info?.cloudinaryImageId || "default-image-id",
          locality: res.info?.locality ||  "default Location",
          cuisines: res.info?.cuisines ||  "Cusines is not available",
          id: res.info?.id || "Default id",

        }
      };
     });
     setAllRestaurants(replaceDummy);
     setFilteredRestaurants(replaceDummy);

     } else {
      console.error("Error in API response");
    }
   }catch(error){

   }
}
 

if(!allRestaurants) return null;
  return (filteredRestaurants.length === 0)? <Shimmer/> : (
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
            const data = result(search, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        
      </div>

      <div className="flex gap-x-4 gap-y-4 flex-wrap">
      
        {filteredRestaurants.map((restaurant) => (
           
          <RestauantCard {...restaurant.data} key={restaurant.data.id} />
        
        ))}
      
      </div>
    </>
  );
}
