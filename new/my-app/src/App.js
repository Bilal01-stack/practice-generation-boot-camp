// import About from './components/About';
// import Nav from './components/Nav';
// import Nav from './components/TabButton';
 // const[mod, setMod] = useState('bg-gray-800')

import React,{Component, useState} from 'react';
import './App.css';
import {Examples} from "./components/Example";
import TabButton from './components/TabButton';
const App = () => {
  const [seletctTopic, setSelectedToopic] = useState()
 
  
  function handleSelect(selectedButton){
    setSelectedToopic(selectedButton)
    console.log(seletctTopic)
  }
 
let TabConten = <p>click to see the content</p>
if(seletctTopic){
  TabConten = <div>
  <h3>{Examples[seletctTopic].title}</h3>
  <p>{Examples[seletctTopic].description}</p>
 </div>
}
  return (
    <>
      {/* <Nav mod={mod}/>
      <About /> */}
      <section>
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
      </section>
    </>
  );
};

export default App;
