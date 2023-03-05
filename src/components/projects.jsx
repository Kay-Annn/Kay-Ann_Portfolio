import React from "react";
import PortfolioArray from "../utils/portfolioArray";
import PortfolioContent from "./portfolioContent";

const ProjectComponent = () => {
  return (
    <div className="projectContainer">
      <h1 className="projectHeading">
        Projects
      </h1>
      <div className="portfolioList">
          {PortfolioArray.map((project) => {
            return <PortfolioContent projectName={project.projectName} image={project.image} gitHub={project.gitHub} Deployment={project.projectDeployment} />
          }

          )}

        </div>
    </div>
     )}



export default ProjectComponent;


//   <div class="row">
//     <div class="col-sm-6">
//       <div class="card">
//         <div class="card-body">
//           <img
//             className="projectImage"
//             src={require("../assets/img/weatherAPI.png")}
//             alt="Weather API Project"
//           ></img>
//           <h5 class="card-title">Weather App</h5>
//           <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//           <div className="linkBtns">
//             <a href="https://kay-annn.github.io/Weather-API/" class="btn btn-primary" target="_blank"
//               rel="noreferrer">Deployed Application</a>
//             <a href="https://github.com/Kay-Annn/Weather-API.git" class="btn btn-primary" target="_blank"
//               rel="noreferrer">GitHub Repository</a>
//           </div>
//         </div>
//       </div>
//     </div>
// </div>
// </div >
//     )
// }
