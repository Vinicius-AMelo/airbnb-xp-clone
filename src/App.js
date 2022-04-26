import React from 'react';
import './App.css';
import Nav from './components/nav'
import Hero from './components/hero'
import Cards from './components/cards'
import CardsData from './components/cardsData'

const cards = CardsData.map(item => {
  return <Cards
    key={item.id} {...item}
  />
})

export default function App() {
  return (
    <div id='main-app'>
      <Nav />
      <Hero />
      <div className='cards'>
        {cards}
      </div>
    </div>
  );
}

