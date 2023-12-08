import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ResturantsDetails() {
    const params = useParams();
    const {id} = params
    
    const [restaurantDetail, setRestaurantDetail] = useState([])

    useEffect(()=>{
          getRestaurantDetils();
    }, [])
   async function getRestaurantDetils(){
   try {
    const data = await fetch ("https://www.swiggy.com/api/seo/getListing?lat=11.352407603698884&lng=75.87227602079383" + id);
    const json = await data.json();
    //console.log(json)
    if(json.data && json.data.success){
        const cards = json.data.success.cards;
        //console.log(cards)
        const restaurants = cards[1].card.card.gridElements.infoWithStyle.restaurants;
        console.log(restaurants)

        const fetchData = restaurants.map((res)=>{
          return{
            obj:{
              text: res.cta.text || "Default Name",
              link: res.cta.link || "Default Link",
            }
          }
        })
        const result = setRestaurantDetail(fetchData)
        console.log(result)
    }else{
      console.error("Error in API response");
    }
   } catch (error) {
    console.log("Api is not feteched: " + error )
   }
   }
  return (
    <>
    {/* <div>ResturantsDetails prams id: {id}</div>
    <h2>{restaurantDetail.text}</h2> */}
    <div>RestaurantsDetails params id: {id}</div>
    {restaurantDetail.length > 0 && (
      <h2>{restaurantDetail[0].obj.text}</h2>
    )}
    </>
  )
}
