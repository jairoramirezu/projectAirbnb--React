import React from "react";
import Nav from './src/components/Nav';
import Hero from './src/components/Hero';
import Card from './src/components/Card';
import data from "./src/data/data";
import './src/styles/App.css';

function App() {
  const Elem = data.map(dat => {
    return <Card
              key={dat.id}
              {...dat}
            />
  })
  return (
    <>
      <Nav />
      <Hero />
      <section className="card-list">
        {Elem}
      </section>
    </>
  )
}

export default App;