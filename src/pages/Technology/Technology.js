import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import "./technology.css"
import data from "../../data.json"
const Technology = () => {
    const [itemName, setName] = useState("Launch vehicle")
    function handleClick(event){
        setName(event.target.id)
    }
  return (
    <div className='tech-container'>
      <Navbar/>
      <h3><span>03</span> SPACE LAUNCH 101</h3>
      <div className='circles'>
        <div className='circle' id="Launch vehicle" onClick={handleClick} style={itemName == "Launch vehicle" ? {backgroundColor:"white"} : {}}></div>
        <div className='circle' id='Spaceport' onClick={handleClick} style={itemName == "Spaceport" ? {backgroundColor:"white"} : {}}></div>
        <div className='circle' id='Space capsule' onClick={handleClick} style={itemName == "Space capsule" ? {backgroundColor:"white"} : {}}></div>
      </div>
      {data.technology.filter(item => item.name == itemName).map(item => (
        <div className='technology-rest'>
            <div className='technology-rest-left'>
                <h4>THE TERMONOLOGY</h4>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
            </div>
            <div className='technology-rest-right'>
                <img src={item.images.portrait}></img>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Technology
