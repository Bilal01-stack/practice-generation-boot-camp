import { useState } from "react";
import logo from "../assets/img/image.png"
import { Link } from "react-router-dom";

const Title = () => (
  <div className="logo">
    <img src={logo } alt ="logo" />
  </div>
);
const Header = () => {
  const [isLogedin, setIsLogedIn] = useState(false);
  return (
    <>
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">
          <li>About</li>
          </Link>
          <Link to="/contact">
          <li>Contact</li>
          </Link>
        </ul>
      </div>
      {isLogedin ? (
        <button onClick={() => setIsLogedIn(false)}>Log Out</button>
      ) : (
        <button onClick={() => setIsLogedIn(true)}>LogIn</button>
      )}
    </>
  );
};
export default Header;
