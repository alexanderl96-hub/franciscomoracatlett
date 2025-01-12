import React, { useState } from 'react';
import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className='navbar-container'>
        <div className='navbar-menu_title'>
           <div className={`navbar-menu ${menuVisible ? 'visible' : 'hidden'}`} 
          >
               <h1>
                  <FontAwesomeIcon icon={faBars} className='navbar-menu-icon'  />
               </h1>
           </div> 

           <div className='navbar-title'>
              <h1 onClick={toggleMenu}>Francisco Mora Catlett</h1>
           </div>
            
        </div>
        
    </div>
  )
}

export default Navbar;