import { useState, useEffect } from "react";
import { CITY_NAME } from "../config";

const useRestaurantMenu = () => {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(CITY_NAME);
      const json = await data.json();
      //console.log(json);
      const newData = json?.data?.cards[7]?.card?.card?.brands;
      //console.log(newData);
      setRestaurants(json?.data?.cards[7]?.card?.card?.brands);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return restaurants;
}

export default useRestaurantMenu;
