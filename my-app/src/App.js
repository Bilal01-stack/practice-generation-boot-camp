// import About from './components/About';
// import Nav from './components/Nav';
// import Nav from './components/TabButton';
// const[mod, setMod] = useState('bg-gray-800')
// import './App.css';
// import {Examples} from "./components/Example";
// import TabButton from './components/TabButton';

import React from "react";

const Title = () => (
  <div className="logo">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvw9_YpLBp84k98-MM2im5z6dpNfchjfUJLcQNiDb2rA&s" />
  </div>
);

const RestaurantList = [
  {
    name: "Burger King 1",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1398&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cusines: ["Burgers", "American"],
    rating: "4.3",
    key:"1"
  },
  {
    name: "Burger King 2",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1398&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cusines: ["Burgers", "American"],
    rating: "4.3",
    key:"2"
  },
  {
    name: "Burger King 3",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1398&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cusines: ["Burgers", "American"],
    rating: "4.3",
    key:"3"
  },
  {
    name: "Burger King 4",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1398&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cusines: ["Burgers", "American"],
    rating: "4.3",
    key:"4"
  },
  {
    name: "Burger King 5",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1398&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cusines: ["Burgers", "American"],
    rating: "4.3",
    key:"5"
  },
];

const RestaurantCards = ({ image, name, cusines, rating }) => {
  return (
    <div className="card">
      <img src={image} />
      <h2>{name}</h2>
      <h3>{cusines.join(" , ")} Qusie</h3>
      <h4>{rating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <>
      {RestaurantList.map((restaurants) => {
        return <RestaurantCards {...restaurants} key = {restaurants.key} />;
      })}
    </>
  );
};

const App = () => {
  //   const [seletctTopic, setSelectedToopic] = useState()

  //   function handleSelect(selectedButton){
  //     setSelectedToopic(selectedButton)
  //     console.log(seletctTopic)
  //   }

  // let TabConten = <p>click to see the content</p>
  // if(seletctTopic){
  //   TabConten = <div>
  //   <h3>{Examples[seletctTopic].title}</h3>
  //   <p>{Examples[seletctTopic].description}</p>
  //  </div>
  // }
  return (
    <div className="contanier">
      <div className="header">
        {/* <Nav mod={mod}/>
      <About /> */}
        {/* <section>
        <h2>Example</h2>
        <menu>
     <TabButton isSelected={seletctTopic === 'Components'} onSelect={()=> handleSelect('Components')}>Components</TabButton>
     <TabButton isSelected={seletctTopic === 'JSX'} onSelect={()=> handleSelect('JSX')}>JSX</TabButton>
     <TabButton isSelected={seletctTopic === 'Props'} onSelect={()=> handleSelect('Props')}>Props</TabButton>
     <TabButton isSelected={seletctTopic === 'State'} onSelect={()=> handleSelect('State')}>State</TabButton>
        </menu>
        <div>
          <br />
        {TabConten}
        </div>
      </section> */}

        <Title />
        <div className="nav-items">
          <ul>
            <li>Home </li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <Body />
    </div>
  );
};

export default App;
