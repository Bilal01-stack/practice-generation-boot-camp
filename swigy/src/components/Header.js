import React, { useState } from "react";
import Logo from "../accest/img/download.png"
import { Link } from "react-router-dom";
// const logedInUser = () => {
//   return true;
// };

export default function Header() {
  const [isLogedIn, setIsLogedIn] = useState(true)
  return (
    <div className="flex justify-between items-center p-2 m-1 shadow-md">
      <div className="w-32">
        <img
          className="w-24"
          alt="Logo"
          src={Logo}     />
      </div>
      <div>
        <ul className="flex">
          <Link to="/">
          <li className="p-3 font-semibold">Home </li>
          </Link>
          <Link to="/about">
          <li className="p-3 font-semibold">About</li>
          </Link>
          <Link to={"/contact"}>
          <li className="p-3 font-semibold">Contat Us</li>
          </Link>
        </ul>
      </div>
      <div>
        <span className="p-3 font-semibold">Cart</span>
      </div>
      <div>
        {isLogedIn ? (<button className="bg-green-300 p-2 mr-1 rounded" onClick={()=>setIsLogedIn(false)}>Login</button>) : (<button className="bg-green-300 p-2 ml-1 rounded" onClick={()=>setIsLogedIn(true)} >Logout</button>
        )}
      </div>
    </div>
  );
}
