import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import userContext from "../utils/UserContext";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

export default function RestaurantMenu() {
  const {user} = useContext(userContext)
  const params = useParams();
  const { id } = params;
  //we can also use this as well
  //const {id} = useParams();

  const [resLink, setResLink] = useState([null]);
  const [restaurantNames, setRestaurantNames] = useState([null]);
  const [image, setImage] = useState([null]);
  const [area, setArea] = useState([null]);
  const [location, setLocation] = useState([null]);
  const [cusine, setCusine] = useState([null]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

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
        //console.log(restaurants);
        const menuDetail= restaurants.map((restaurant)=>restaurant.cta.link);
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

        setResLink(menuDetail)
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
const dispatch = useDispatch()
 const handleAddItem = ()=>{
  dispatch(addItem("Bringles"))
 }

  return (!restaurantNames) ? <Shimmer /> : (
    
    <div >
      <div >
      <h1>Restaurant City: {id}</h1>
      <button className="m-2 p-2 bg-green-400 300" onClick={()=>handleAddItem()}>Add Items</button>
      </div>
      <div className="flex flex-wrap">
      {restaurantNames.map((name, id) => (
        <div className="w-56 p-2 m-4 shadow-lg bg-pink-50" key={id}>
          <h1 className="font-bold text-2xl"> {name}</h1>
          <h1> Area: {area[id]}</h1>
          <h1> Location: {location[id]}</h1>
          <h1> Cusine: {cusine[id]}</h1>
          <img src={IMG_CDN_URL + image[id]} />
          <h1 className="p-10 font-bold text-red-500">{user.name} {user.email}</h1>
        </div>
      ))}
      </div>
      
    </div>
  );
}
