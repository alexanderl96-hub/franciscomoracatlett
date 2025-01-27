import React, { useState, useEffect} from 'react'
import './projectsContainer.css'
import AfrohornProjects from './AfroHorn-Project/afrohornProjects';
import MainProjects from './Main-Projects/mainProjects';
import OthersProjects from './Other-Projects/othersProjects';

const projectsContainer = () => {
    const [selectPageProject, setSelectpageProject] = useState('AfroHorn Projects')

  return (
    <div className='projects-container'>
        <div className="projects-navbar">
            <div onClick={(e)=> setSelectpageProject(e.target.textContent)}>AfroHorn Projects</div>
            <div onClick={(e)=> setSelectpageProject(e.target.textContent)}>Main Projects</div>
            <div onClick={(e)=> setSelectpageProject(e.target.textContent)}>Others Projects</div>
        </div>
        <div>
           {selectPageProject === "AfroHorn Projects" && <AfrohornProjects />}
           {selectPageProject === "Main Projects" && <MainProjects />}
           {selectPageProject === "Others Projects" && <OthersProjects />}
        </div>
    </div>
  )
}

export default projectsContainer