import React,{Component, useState} from 'react';
import './App.css';
import {Examples} from "./components/Example";
// import About from './components/About';
// import Nav from './components/Nav';
// import Nav from './components/TabButton';
import TabButton from './components/TabButton';
const App = () => {
  const [seletctTopic, setSelectedToopic] = useState("Components")
  // const[mod, setMod] = useState('bg-gray-800')
  
  function handleSelect(selectedButton){
    setSelectedToopic(selectedButton)
    console.log(seletctTopic)
  }
 

  return (
    <>
      {/* <Nav mod={mod}/>
      <About /> */}
      <section>
        <h2>Example</h2>
        <menu>
     <TabButton onSelect={()=> handleSelect('Components')}>Components</TabButton>
     <TabButton onSelect={()=> handleSelect('JSX')}>JSX</TabButton>
     <TabButton onSelect={()=> handleSelect('Props')}>Props</TabButton>
     <TabButton onSelect={()=> handleSelect('State')}>State</TabButton>
        </menu>
        <div>
          <h3>{Examples[seletctTopic].title}</h3>
          <p>{Examples[seletctTopic].description}</p>
         
        </div>
      </section>
    </>
  );
};

export default App;
