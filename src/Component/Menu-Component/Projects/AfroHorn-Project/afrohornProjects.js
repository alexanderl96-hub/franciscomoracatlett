import React from "react";
import "./afrohornProjects.css";
import release_1 from '../../../../images/Otherlabels/COSMIC LINK  copy.jpg'

const afrohornProjects = () => {
  return (
    <div className="afrohorn-projects-container">
      <p
        style={{
          textTransform: "uppercase",
          fontWeight: 600,
          fontStyle: "italic",
        }}
      >
        PROJECTS - new releases
      </p>
      <img className="image_testing"
            src={release_1}
            alt="Example"
          />

        <div>
            
        </div>
    </div>
  );
};

export default afrohornProjects;
