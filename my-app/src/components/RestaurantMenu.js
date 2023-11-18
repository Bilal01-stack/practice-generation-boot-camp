import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

// const dataAPi =()=>{
//   return(
//     <>
//      <h2>{data.name}</h2>
//     </>
//   )
// }
export default function RestaurantMenu() {
  const params = useParams();
  const { id } = params;
  //we can also use this as well
  //const {id} = useParams();

  // const [restaurant, setRestaurant] = useState({});
  const [restaurantNames, setRestaurantNames] = useState([null]);
  const [image, setImage] = useState([null]);
  const [area, setArea] = useState([null]);
  const [location, setLocation] = useState([null]);
  const [cusine, setCusine] = useState([null]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  // async function getRestaurantInfo(){
  //    const data = await fetch("https://www.swiggy.com/api/seo/getListing?lat=11.352407603698884&lng=75.87227602079383")
  //    const json =await data.json();
  //    console.log(json.data)
  //    setRestaurant(json.data)

  //    const result = setRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  //     console.log(result)
  // }

  async function getRestaurantInfo() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/api/seo/getListing?lat=11.352407603698884&lng=75.87227602079383"
      );
      const json = await response.json();

      // Check if the response is successful before proceeding
      if (json.data && json.data.success) {
        const cards = json.data.success.cards;
        const restaurants =
          cards[1].card.card.gridElements.infoWithStyle.restaurants;
        console.log(restaurants);
        const names = restaurants.map((restaurant) => restaurant.info.name);
        const imgs = restaurants.map(
          (restaurant) => restaurant.info.cloudinaryImageId
        );
        const areaName = restaurants.map(
          (restaurant) => restaurant.info.areaName
        );
        const locationDetail = restaurants.map(
          (restaurant) => restaurant.info.locality
        );
        const menu = restaurants.map((restaurant) => restaurant.info.cuisines);
        console.log(menu);

        setRestaurantNames(names);
        setImage(imgs);
        setArea(areaName);
        setLocation(locationDetail);
        setCusine(menu);
      } else {
        console.error("Error in API response");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

 

  return (!restaurantNames) ? <Shimmer /> : (
    <>
      <h1>Restaurant City: {id}</h1>
      {/* {restaurantNames.map((name, index) => (
        <h1 key={index}>{name}</h1>
      ))}
      {image.map((imgs, index) => (
        <img key={index} src={IMG_CDN_URL+imgs} alt={`Restaurant ${index + 1}`} />
      ))} */}
      {restaurantNames.map((name, id) => (
        <div key={id}>
          <h1>Restaurant Name: {name}</h1>
          <h1> Area: {area[id]}</h1>
          <h1> Location: {location[id]}</h1>
          <h1> Cusine: {cusine[id]}</h1>
          <img src={IMG_CDN_URL + image[id]} />
        </div>
      ))}
    </>
  );
}
