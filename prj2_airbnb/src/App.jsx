import React from "react"

import NavbarComponent from "./components/NavbarComponent"
import HeroComponent from "./components/HeroComponent"
import CardComponent from "./components/CardComponent"

import data from './data.jsx'

export default function App() {
    const cards = data.map((card) => {
      return(
        <CardComponent 
          key={card.id}
          title={card.title}
          price={card.price}
          location={card.location}
          coverImg={card.coverImg}
          stats={card.stats}
          openSpots={card.openSpots}
        />
      )
    })
    return (
        <div className="main">
          <NavbarComponent />
          <HeroComponent />
          <div className="cards">
            {cards}
          </div>
        </div>
    )
}