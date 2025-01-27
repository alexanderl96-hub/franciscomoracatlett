import React from 'react'
import './mainProjects.css'
import projects_1 from '../../../../images/Projects/ELECTRIC_WORLDS_Platforms_copy.335121534_std.png'

const mainProjects = () => {
  return (
    <div className="main-projects-container" >
        <img className="main_projectsImage_testing"
            src={projects_1}
            alt="Example"
          />
    </div>
  )
}

export default mainProjects