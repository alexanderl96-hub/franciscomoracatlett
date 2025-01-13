import React, { useState, useEffect } from 'react';
import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Sidenav from '../Menu-Component/Sidenav/sidenav'

const Navbar = ({setLinkPath, menuIsActive, linkPath}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    // setMenuIsActive(true)
  };

  const handleScreenResize = () => {
    if (!menuIsActive) {
      setMenuVisible(false); // Hide the menu on larger screens
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
    <div className='navbar-container'>
        <div className='navbar-menu_title'>
           <div className="navbar-menu" onClick={toggleMenu}>
               <h1>
                {!menuVisible &&  <FontAwesomeIcon icon={faBars} 
                                   className='navbar-menu-icon'  /> } 
                 {menuVisible && <FontAwesomeIcon icon={faXmark} 
                                   className='navbar-menu-icon' /> }
               </h1>

           </div> 

           <div className='navbar-title'>
              <h1 >Francisco Mora Catlett</h1>
           </div>
            
        </div>

       {menuVisible && <Sidenav className="sidenav" 
                                 style={{
                                  transition: 'color 1.5s ease', // This is always applied
                                  color: menuVisible ? '#ec0808' : '#000', // Conditional color logic
                                }}
                                menuVisible={menuVisible} 
                                setMenuVisible={setMenuVisible} 
                                setLinkPath={setLinkPath} 
                                linkPath={linkPath}
                                />
                                }
        
    </div>
  )
}

export default Navbar;