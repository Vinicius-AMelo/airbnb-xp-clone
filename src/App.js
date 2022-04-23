import React from 'react';
import './App.css';
import Nav from './components/nav'
import Hero from './components/hero'
import Cards from './components/cards'
import Kate from "./components/images/katie-zaferes.png"
import Wedding from "./components/images/casamento.png"
import Bike from "./components/images/bike.png"
export default function App() {
  return (
    <div id='main-app'>
    <Nav />
    <Hero />
    <div className='cards'>
    <Cards
      img={Kate}
      rate={'5.0 '}
      ratings={6}
      country='USA'
      title='Life lessons with Katie Zaferes'
      value={136}
    />
    <Cards
    img={Wedding}
    rate={'5.0 '}
    ratings={30}
    country='USA'
    title='Learn wedding photography'
    value={125}
    />
    <Cards
    img={Bike}
    rate= {'4.8 '}
    ratings={2}
    country='USA'
    title='Group Mountain Biking'
    value={50}
    />
    </div>
    </div>
  );
}

