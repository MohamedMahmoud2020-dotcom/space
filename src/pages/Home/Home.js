import React, { useState } from 'react'
import Navbar from "../../components/Navbar.js"
import "./home.css"
const Home = () => {
  return (
    <div className='home-container'>
      <Navbar/>
      <div className='rest-home'>
        <div className='home-article'>
            <h3>SO, YOU WANT TO TRAVEL TO</h3>
            <h1>Space</h1>
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! Explore</p>
        </div>
        <div className='explore-container'>
            <div className='explore'>
                <a href='/destination'>Explore</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
