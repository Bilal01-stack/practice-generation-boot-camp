import './App.css';

import React, { useState } from 'react';

const App = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [accordionStyle, setAccordionStyle] = useState({
    backgroundColor: 'bg-black',
    textColor: 'text-white',
  });

  const toggleStyle=()=>{
    if (setAccordionStyle.textColor === 'white'){
      setAccordionStyle({
        textColor:'black',
        backgroundColor: 'bg-white'
      })
    }
  }
  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const data = [
    {
      title: 'Section 1',
      content: 'Content of Section 1',
    },
    {
      title: 'Section 2',
      content: 'Content of Section 2',
    },
  ];

  return (
    <div className={`w-full max-w-md mx-auto ${accordionStyle.backgroundColor}`}>
      {data.map((item, index) => (
        <div key={index} className="border border-gray-300 mb-2">
          <button
            className={`w-full text-left p-4 focus:outline-none ${accordionStyle.textColor}`}
            onClick={() => handleToggle(index)}
          >
            {item.title}
          </button>
          {expandedIndex === index && (
            <div className={`w-full text-left p-4 focus:outline-none ${accordionStyle.textColor}`}>
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
      <button onClick={toggleStyle} className="bg-gray-800 text-white py-2 px-4 mt-4 rounded">
        Click Me
      </button>
    </div>
  );
};

export default App;
