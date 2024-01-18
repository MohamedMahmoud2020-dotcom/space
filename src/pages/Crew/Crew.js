import React, { useState } from 'react'
import "./crew.css"
import Navbar from '../../components/Navbar'
import data from "../../data.json"
const Crew = () => {
  const [itemName, setName] = useState("Douglas Hurley")
  function handleClick(event){
    setName(event.target.id)
  }
  return (
    <div className='crew-container'>
      <Navbar/>
      <h1><span>01</span> MEET YOUR CREW</h1>
      <div className='slides'>
            <div className='circle' id='Douglas Hurley' onClick={handleClick} style={itemName == "Douglas Hurley" ? {backgroundColor:"white"} : {}}></div>
            <div className='circle' id='Mark Shuttleworth' onClick={handleClick} style={itemName == "Mark Shuttleworth" ? {backgroundColor:"white"} : {}}></div>
            <div className='circle' id='Victor Glover' onClick={handleClick} style={itemName == "Victor Glover" ? {backgroundColor:"white"} : {}}></div>
            <div className='circle' id='Anousheh Ansari' onClick={handleClick} style={itemName == "Anousheh Ansari" ? {backgroundColor:"white"} : {}}></div>
        </div>
      <div className='crew-rest'>
        {data.crew.filter((item) => item.name == itemName).map(item =>(
            <div className='crew-item'>
                <div className='crew-rest-right'>
                    <h3>{item.role}</h3>
                    <h1>{item.name}</h1>
                    <p>{item.bio}</p>
                </div>
                <div className='crew-rest-left'>
                    <img src={item.images.png}></img>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Crew
