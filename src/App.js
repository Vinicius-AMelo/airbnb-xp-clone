import React from 'react';
import './App.css';
import Nav from './components/nav'
import Hero from './components/hero'
import Cards from './components/cards'
import CardsData from './components/cardsData'

const cards = CardsData.map(card => {
  return <Cards
    key={card.id} img={card.img} rate={card.rate} ratings={card.ratings}
    location={card.location} title={card.title} value={card.value} openSpots={card.openSpots}
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

