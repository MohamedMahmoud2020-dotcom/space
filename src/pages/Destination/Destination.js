import React, { useState } from 'react'
import Navbar from "../../components/Navbar.js"
import "./destination.css"
import data from "../../data.json"
const Destination = () => {
  const [itemName, setItem] = useState("Moon")
  function handleClick(event){
    setItem(event.target.id)
  }
  return (
    <div className='destination-container'>
      <Navbar/>
      <h3><span>01</span> PICK YOUR DESTINATION</h3>
      <div className='space-components'>
        <a id="Moon" onClick={handleClick} style={itemName == "Moon" ? {borderBottom : "1px solid white"} : {}}>MOON</a>
        <a id="Mars" onClick={handleClick} style={itemName == "Mars" ? {borderBottom : "1px solid white"} : {}}>MARS</a>
        <a id="Europa" onClick={handleClick} style={itemName == "Europa" ? {borderBottom : "1px solid white"} : {}}>EUROPA</a>
        <a id="Titan" onClick={handleClick} style={itemName == "Titan" ? {borderBottom : "1px solid white"} : {}}>TITAN</a>
      </div>
        {data.destinations.filter((item) => item.name === itemName).map(item => (
            <div className='rest-destination'>
                <div className='left-destination'>
                    <img src={item.images.png}></img>
                </div>
                <div className='right-destination'>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <hr></hr>
                    <div className='right-rest'>
                        <div className='left-rest-left'>
                            <p>AVG. DISTANCE</p>
                            <h3>{item.distance}</h3>
                        </div>
                        <div className='right-rest-left'>
                            <p>EST. TRAVEL TIME</p>
                            <h3>{item.travel}</h3>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
  )
}

export default Destination
