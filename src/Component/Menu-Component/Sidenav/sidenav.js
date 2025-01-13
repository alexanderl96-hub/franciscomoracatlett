import React, { useState } from 'react';
import './sidenav.css'

const Sidenav = ({menuVisible, setMenuVisible, setLinkPath, linkPath}) => {
  const menuItems = [
    "Home Francisco Mora Catlett",
    "aace records",
    "other labels",
    "Projects",
    "Events & Concerts",
    "Write Ups",
    "Bio, Discography, Commissions",
    "Gallery",
    "Links",
    "*Contact *Booking *CD Sales",
  ];

  // Set the first item as active by default
  const [activeIndex, setActiveIndex] = useState(0);
  

  const handleActive = (index) => {
    setActiveIndex(index); // Update the active index when an item is clicked
  };


  return (
    <div className={menuVisible ? "sidenav-container" : "sidenav-container-unactive" }  >
      {menuItems.map((item, index) => (
        <div
          key={index}
          style={{
            color: linkPath === item ? "#ec0808" : "#fff", // Check if linkPath matches the item
          }}
          className="side-active-item"
          onClick={() => {handleActive(index), 
                          setMenuVisible(!menuVisible), setLinkPath(menuItems[index])}} // Update active index on click
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sidenav;
