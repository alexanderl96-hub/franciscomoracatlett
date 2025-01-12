import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'

import Navbar from './Component/NavBar/navbar.js';
import Footer from './Component/Footer/footer.js'
import Home from './Component/Menu-Component/Home/Home.js';

const App = () => {
  return (
    
    <Router>
        <Navbar  />
        <div className="App"> 
             <Routes>
                <Route exact path="/" element={<Home />} />
             </Routes>
          {/* <h1 >Hello !</h1> */}
            <Footer />
        </div>
   </Router> 
   
  )
}

export default App;
