import React from 'react'
import './homepage.css'
import pick1 from '../../../images/FRANCISCO_MORA_CATLETT.jpg'
import aaceImage from '../../../images/AACE_logo.jpg'

const homepage = () => {
  return (
    <div className='homepage-container'>

        <div className='homepage-main-background' 
             style={{ backgroundImage: `url(${pick1})`}} />

        <div className='homepage-main' >
            <div>
                <div className='homepage-video-container' >
                    <iframe className='homepage-video-container-iframe'  
                        src="https://www.youtube.com/embed/kCIefQsfBI8" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div className='homepage-text-container' >
                    <p >FRANCISCO MORA CATLETT</p>
                    “LIKE THE MOST ELEGANT HAND-TOOLED WALNUT DASHBOARD ON THE 
                        FLIGHT-DECK OF A SPACE SHUTTLE, IS THE SOUND OF FRANCISCO 
                        MORA CATLETT”...    Straight No Chaser, London, UK 1999
               </div>
            </div>
           
            <div>
                <div className='homepage-video-container-aace'
                     style={{ backgroundImage: `url(${aaceImage})` }}>
              
                </div>
                <div  className='homepage-text-container' >
                       <p >AACE RECORDS</p>
                        
                        An independent recording label working to document, promote 
                        and distribute the creative work of drummer, composer 
                        Francisco Mora Catlett. 
               </div>
            </div>
        </div>


        <div>
        
        </div>
    </div>
  )
}

export default homepage;