import React from "react";
import Home from "./pages/Home/Home.js"
import Destination from "./pages/Destination/Destination.js"
import Crew from "./pages/Crew/Crew.js";
import Technology from "./pages/Technology/Technology.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/destination" element={<Destination/>}></Route>
        <Route path="/crew" element={<Crew/>}></Route>
        <Route path="/technology" element={<Technology/>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
