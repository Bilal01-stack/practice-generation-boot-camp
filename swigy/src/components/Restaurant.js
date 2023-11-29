import {IMG_CDN_URL} from "../constants";
const RestauantCard =({ name,
    locality,cuisines,
    cloudinaryImageId})=>{
    return(
<div className='w-1/4 p-5 font-medium text-lg shadow-md'>
        <img className='rounded-md ' alt='' src={IMG_CDN_URL +  cloudinaryImageId} />
        <h1 className='text-3xl font-medium pt-3'>{name}</h1>
        <h1 className='text-xl font-medium pt-3'>Location:{locality}</h1>
        <span className='font-normal'>Cusines:  {cuisines.join(", ")}</span>
    </div>
    )
}

export default RestauantCard;