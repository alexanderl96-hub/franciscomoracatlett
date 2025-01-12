import React from 'react'
import './Home.css'

import Homepage from '../HomePage/homepage'

const Home = () => {
  return (
    <div className='Home-container'> 
          <div className='Home-menu'>
             <ul>
                <li>Home Francisco Mora Catlett</li>
                <li>aace records</li>
                <li>other labels</li>
                <li>Projects</li>
                <li>Events & Concerts</li>
                <li>Write Ups</li>
                <li>Bio, Discography, Comissions</li>
                <li>Galery</li>
                <li>Links</li>
                <li>*Contact *Booking *CD Sales</li>
             </ul>
          </div>

          <div className='Home-information'> 
             <Homepage />
          </div>
    </div>
  )
}

export default Home