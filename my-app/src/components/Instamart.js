import React, { useState } from "react";

const Section = ({ title, description,isVisible,setIsVisible }) => {
  
  return (
    <div className="p-2 m-2 border border-black">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};
export default function Instamart() {
  const [visibleSection, setVisibleSection] = useState('team')
  return (
    <div>
      <h1 className="p-2 m-2 text-3xl font-bold">InstaMart</h1>
      <Section
        title="About Insta Mart"
        description={"This is the about section of insta mart"}
        isVisible={visibleSection=== 'about'}
        setIsVisible={()=>setVisibleSection('about')}
      />
      <Section
        title="Team Insta Mart"
        description={"This is the about section of insta mart 2"}
        isVisible={visibleSection=== 'team'}
        setIsVisible={()=>setVisibleSection('team')}
      />
      <Section
        title="Career Insta Mart"
        description={"This is the about section of insta mart 3"}
        isVisible={visibleSection=== 'career'}
        setIsVisible={()=>setVisibleSection('career')}
      />
    </div>
  );
}
