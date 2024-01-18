import React, { useState, useEffect } from 'react'
import "./navbar.css"


const Navbar = () => {
  const [clicked, setIsClicked] = useState(false)
  function handleClick(){
    setIsClicked(!clicked)
  }
  return (
    <nav>
    <div className='home-logo'>
        <img src='./assets/shared/logo.svg'></img>
    </div>
    <div className='rest-nav'>
        <div id='home' ><a href='./'>00 Home</a></div>
        <div id='destination'><a href='./destination'>01 Destination</a></div>
        <div id='crew'><a href='./crew'>02 Crew</a></div>
        <div id='technology'><a href='./technology'>04 Technology</a></div>  
    </div>
    <div className='rest-nav1' style={clicked ? {display:"flex"} : {display:"none"}}>
        <div id='home' ><a href='./'>00 Home</a></div>
        <div id='destination'><a href='./destination'>01 Destination</a></div>
        <div id='crew'><a href='./crew'>02 Crew</a></div>
        <div id='technology'><a href='./technology'>04 Technology</a></div>  
    </div>
    <hr></hr>
    <div className='mobile-icon' onClick={handleClick}><img src={clicked ? "./assets/shared/icon-close.svg" : "./assets/shared/icon-hamburger.svg"}></img></div>
  </nav>
  )
}

export default Navbar
