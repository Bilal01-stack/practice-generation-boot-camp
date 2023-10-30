import React from 'react';

const Switch = ({ handleToggle, isToggled }) => {
  const toggleClass = "transform translate-x-5";

  return (
    <div
      className="md:w-14 md:h-7 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer"
      onClick={handleToggle}
    >
      {/* Switch */}
      <div
        className={`bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out ${isToggled ? toggleClass : ""}`}
      ></div>
     
    </div>
  );
};

export default Switch;
