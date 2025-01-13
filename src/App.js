import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Component/NavBar/navbar.js";
import Footer from "./Component/Footer/footer.js";
import Home from "./Component/Menu-Component/Home/Home.js";

const App = () => {
  const [linkPath, setLinkPath] = useState("Home Francisco Mora Catlett");
  const [menuIsActive, setMenuIsActive] = useState(false);

  const handleScreenResize = () => {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      setMenuIsActive(true); // Show the menu on smaller screens
    } else {
      setMenuIsActive(false); // Hide the menu on larger screens
    }
  };

  // Add event listener for screen resize
  useEffect(() => {
    // Set initial state based on screen size
    handleScreenResize();

    // Listen to screen resize events
    window.addEventListener('resize', handleScreenResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleScreenResize);
    };
  }, []);

  return (
    <Router>
      <Navbar linkPath={linkPath} setLinkPath={setLinkPath} menuIsActive={menuIsActive} />

      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<Home linkPath={linkPath} 
                           menuIsActive={menuIsActive} 
                           setMenuIsActive={setMenuIsActive}
                           setLinkPath={setLinkPath} />}
          />
        </Routes>
        {/* <h1 >Hello{linkPath}</h1> */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
