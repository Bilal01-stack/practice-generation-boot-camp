import { useState } from "react";

const logedInUser = () => {
  return false;
};

const Title = () => (
  <div className="logo">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvw9_YpLBp84k98-MM2im5z6dpNfchjfUJLcQNiDb2rA&s" />
  </div>
);
const Header = () => {
  const [isLogedin, setIsLogedIn] = useState(false);
  return (
    <>
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home Upadte </li>
          <li>About</li>
          <li>Contact</li>
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
