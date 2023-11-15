import { useState, useEffect } from "react";
//import { RestaurantList } from "../config";
import Shimmer from "./Shimmer";
const RestaurantCards = ({ text, link }) => {
  return (
    <div className="card">
      {/* <img src={image} /> */}
      <h2>{text}</h2>
      <p>{link}</p>
      {/* <h3>{cusines.join(" , ")} Qusie</h3> */}
      {/* <h4>{rating}</h4> */}
    </div>
  );
};

function filterData(searchText, retaurants) {
  return retaurants.filter((retaurant) =>
    retaurant?.text?.toLowerCase()?.includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json)
    const newData = json?.data?.cards[7]?.card?.card?.brands;
    console.log(newData);
    setAllRestaurants(json?.data?.cards[7]?.card?.card?.brands);
    setFilteredRestaurants(json?.data?.cards[7]?.card?.card?.brands);
  }
  // if (!allRestaurants) return null;
  // if (filteredRestaurants?.length === 0) return <h1>Match your filter</h1>;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-containert">
        <input
          type="text"
          placeholder="search"
          className="search-name"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Searh
        </button>
      </div>
      {filteredRestaurants.map((retaurant, index) => {
        return <RestaurantCards {...retaurant} key={index} />;
      })}
    </>
  );
};

export default Body;
