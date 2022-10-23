import React from 'react'
import { FaGlobeAmericas } from "react-icons/fa"
import TravelCard from "./TravelCard"
import data from '../../data'

function HomePage() {
    const cards = data.map(item => {
        return (
            <TravelCard 
                key={item.id}
                {...item}
            />
        )
    })

  return (
    <div className="homePage">
      <header className="home__header">
        <FaGlobeAmericas className="header__icon" />
        <p className="header__title">my travel journal</p>
      </header>
      {cards}
    </div>
  );
}

export default HomePage