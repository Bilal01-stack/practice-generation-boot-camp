import { useState,useContext } from "react";
import logo from "../assets/img/image.png"
import { Link } from "react-router-dom";
import userContext from "../utils/UserContext"
import { useSelector } from "react-redux";
import store from "../utils/store";
const Title = () => (
  <div className="logo">
    <img className="h-28 p-2" src={logo } alt ="logo" />
  </div>
);
const Header = () => {
  const [isLogedin, setIsLogedIn] = useState(false);
  const {user} = useContext(userContext)
  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-100">
      <Title />
      <div >
        <ul className="flex py-11">
          <Link to="/"><li className="px-3">Home</li></Link>
          <Link to="/about">
          <li className="px-3">About</li>
          </Link>
          <Link to="/contact">
          <li className="px-3">Contact</li>
          </Link>
          <Link to="/instamart">
          <li className="px-3">Instamrt</li>
          </Link>
         
          <li className="px-3"> Items: {cartItems.length} </li>
         
        </ul>
      </div>
      <h1 className="p-10 font-bold text-red-500">{user.name}</h1>
      {isLogedin ? (
        <button onClick={() => setIsLogedIn(false)}>Log Out</button>
      ) : (
        <button onClick={() => setIsLogedIn(true)}>LogIn</button>
      )}
    </div>
  );
};
export default Header;
