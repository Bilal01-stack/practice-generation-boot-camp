import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function ResturantsDetails() {
    const params = useParams();
    const {id} = params

    useEffect(()=>{
          getRestaurantDetils();
    }, [])
   async function getRestaurantDetils(){
   try {
    const data = await fetch ("https://www.swiggy.com/api/seo/getListing?lat=11.352407603698884&lng=75.87227602079383");
    const json = await data.json();
    console.log(json)
    if(json.data && json.data.success){
        const cards = json.data.success.cards;
        //console.log(cards)
        const restaurants = cards[1].card.card.gridElements.infoWithStyle.restaurants;
        //console.log(restaurants)
    }
   } catch (error) {
    console.log("Api is not feteched: " + error )
   }
   }
  return (
    <div>ResturantsDetails prams id: {id}</div>
  )
}
