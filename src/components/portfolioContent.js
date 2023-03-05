import React from "react";

function PortfolioContent({projectName,image,Deployment,gitHub}) {
    return (
      <div class="card">
        <div class="card-body">
          <img
            className="projectImage"
            src={image}
            alt="Weather API Project"
          ></img>
          <h5 class="card-title">{projectName}</h5>
          {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
          <div className="linkBtns">
          <a href={Deployment} class="btn btn-primary" target="_blank"
              rel="noreferrer">Deployed Application</a>
            <a href={gitHub} class="btn btn-primary" target="_blank"
              rel="noreferrer">GitHub Repository</a>
          </div>
        </div>
      </div>

    )
 
}




export default PortfolioContent;
