import { useState } from "react";
import { RestaurantList } from "../config";
const RestaurantCards = ({ image, name, cusines, rating }) => {
  return (
    <div className="card">
      <img src={image} />
      <h2>{name}</h2>
      <h3>{cusines.join(" , ")} Qusie</h3>
      <h4>{rating} stars</h4>
    </div>
  );
};

function filterData(searchText,retaurants){
 return retaurants.filter(retaurant=>retaurant.name.includes(searchText))
 
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [retaurants, setRstaurants] = useState(RestaurantList)
  return (
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
        
        <button className="search-btn" onClick={()=>
        {
          const data = filterData(searchText,retaurants)
          setRstaurants(data)
        }
        }>Searh</button>
     

      </div>
      {retaurants.map((retaurant) => {
        return <RestaurantCards {...retaurant} key={retaurant.key} />;
      })}
    </>
  );
};

export default Body;
