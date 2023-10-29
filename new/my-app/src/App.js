
import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';

const App = () => {
  const[mod, setMod] = useState('bg-gray-800')
  return (
    <>
      <Nav mod={mod}/>
      <About />
    </>
  );
};

export default App;
