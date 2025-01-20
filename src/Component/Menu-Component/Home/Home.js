import React, { useState } from "react";
import "./Home.css";

import Homepage from "../HomePage/homepage";
import AACE from "../Acce-Records/aacerecords";
import Labels from "../Other-Labels/otherlabels";
// import Projects from '../Projects/'
import Events from "../Events-Concerts/events";
import WriteUps from "../Write-Ups/writeups";
import Bio from "../Resume-Bio/resumen";
import Galery from "../Galery/galery";
import Links from "../Links/links";
import Contact from "../Contact-Book-Sales/contact";

const Home = ({ linkPath, menuIsActive, setMenuIsActive, setLinkPath }) => {
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeValue, setActiveValue] = useState(menuItems[0]);

  const handleActive = (index) => {
    setActiveIndex(index);
    // setActiveValue(menuItems[index]);
    setLinkPath(menuItems[index]);
  };

  return (
    <div className="Home-container">
      <div className="Home-menu">
        <ul>
          {menuItems.map((item, index) => (
            <li
              className={`li-menu ${linkPath === item ? "active-item" : ""}`}
              key={index}
              onClick={() => handleActive(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="Home-information">
        <p>
          Currently Selected: {activeValue} ,Link: {linkPath}, active:{" "}
          {menuIsActive ? "true" : "false"}{" "}
        </p>
        {/* {activeValue  === "Home Francisco Mora Catlett" && !menuIsActive && <Homepage /> } */}
        {linkPath === "Home Francisco Mora Catlett" && <Homepage />}

        {/* {activeValue === "aace records" && !menuIsActive &&<AACE /> } */}
        {linkPath === "aace records" && <AACE />}

        {/* {activeValue === "other labels" && !menuIsActive &&<Labels /> } */}
        {linkPath === "other labels" && <Labels />}

        {/* {activeValue === "Projects" && <Projects /> } */}
        {/* {activeValue === "Projects" && <Projects /> } */}

        {/* {activeValue === "Events & Concerts" && !menuIsActive &&<Events /> } */}
        {linkPath === "Events & Concerts" && <Events />}

        {/* {activeValue === "Write Ups" && !menuIsActive &&<WriteUps /> } */}
        {linkPath === "Write Ups" && <WriteUps />}

        {/* {activeValue === "Bio, Discography, Commissions" && !menuIsActive &&<Bio /> } */}
        {linkPath === "Bio, Discography, Commissions" && <Bio />}

        {/* {activeValue === "Gallery" && !menuIsActive &&<Galery /> } */}
        {linkPath === "Gallery" && <Galery />}

        {/* {activeValue === "Links" && !menuIsActive &&<Links /> } */}
        {linkPath === "Links" && <Links />}

        {/* {activeValue === "*Contact *Booking *CD Sales" && !menuIsActive &&<Contact /> } */}
        {linkPath === "*Contact *Booking *CD Sales" && <Contact />}
      </div>
    </div>
  );
};

export default Home;
