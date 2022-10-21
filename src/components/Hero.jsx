import React from "react";
import '../styles/Hero.css'

function Hero() {
  return (
    <div className="hero--mainDiv">
      <img className="hero--Grid" src="https://images.jairoramirezu.com/images/airbnb/photo-grid.png" alt="grid"/>
      <h1 className="hero--Title">Online Expriences</h1>
      <p className="hero--Des">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}

export default Hero;