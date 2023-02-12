import React from "react";

const ProjectComponent = () => {
    return (
        <div className="projectContainer">
        <h1>
    Projects
  </h1>

<div class="row">
<div class="col-sm-6">
  <div class="card">
    <div class="card-body">
    <img
          className="projectImage"
          src={require("../assets/img/weatherAPI.png")}
          alt="Weather API Project"
        ></img>
      <h5 class="card-title">Weather App</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <div className="linkBtns">
      <a href="https://kay-annn.github.io/Weather-API/" class="btn btn-primary"  target="_blank"
              rel="noreferrer">Deployed Application</a>
      <a href="https://github.com/Kay-Annn/Weather-API.git" class="btn btn-primary"  target="_blank"
              rel="noreferrer">GitHub Repository</a>
      </div>
    </div>
  </div>
</div>
<div class="col-sm-6">
  <div class="card">
    <div class="card-body">
    <img
          className="projectImage"
          src={require("../assets/img/workdayscheduler.png")}
          alt="Weather API Project"
        ></img>
      <h5 class="card-title">Work Day Scheduler</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <div className="linkBtns">
      <a href="https://kay-annn.github.io/My-Amazing-Daily-Planner/" class="btn btn-primary"  target="_blank"
              rel="noreferrer">Deployed Application</a>
      <a href="https://github.com/Kay-Annn/My-Amazing-Daily-Planner.git" class="btn btn-primary"  target="_blank"
              rel="noreferrer">GitHub Repository</a>
      </div>
    </div>
  </div>
</div>
<div class="col-sm-6">
  <div class="card">
    <div class="card-body">
    <img
          className="projectImage"
          src={require("../assets/img/passwordgenerator.png")}
          alt="Weather API Project"
        ></img>
      <h5 class="card-title">Password Generator</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <div className="linkBtns">
      <a href="https://kay-annn.github.io/Password-Generator-Web-App/" class="btn btn-primary"  target="_blank"
              rel="noreferrer">Deployed Application</a>
      <a href="https://github.com/Kay-Annn/Password-Generator-Web-App.git" class="btn btn-primary"  target="_blank"
              rel="noreferrer">GitHub Repository</a>
      </div>
    </div>
  </div>
</div>
<div class="col-sm-6">
  <div class="card">
    <div class="card-body">
    <img
          className="projectImage"
          src={require("../assets/img/hospitaldb.png")}
          alt="Weather API Project"
        ></img>
      <h5 class="card-title">Hospital Database</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <div className="linkBtns">
      <a href="https://hospitalmvcproject.herokuapp.com/" class="btn btn-primary"  target="_blank"
              rel="noreferrer">Deployed Application</a>
      <a href="https://github.com/Kay-Annn/Hospital_Database_Tracker.git" class="btn btn-primary"  target="_blank"
              rel="noreferrer">GitHub Repository</a>
      </div>
    </div>
  </div>
</div>
<div class="col-sm-6">
  <div class="card">
    <div class="card-body">
    <img
          className="projectImage"
          src={require("../assets/img/techbolg.png")}
          alt="Weather API Project"
        ></img>
      <h5 class="card-title">Tech Blog</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <div className="linkBtns">
      <a href="https://tech-blog-mvc.herokuapp.com/" class="btn btn-primary"  target="_blank"
              rel="noreferrer">Deployed Application</a>
      <a href="https://github.com/Kay-Annn/My-Tech-Blog.git" class="btn btn-primary"  target="_blank"
              rel="noreferrer">GitHub Repository</a>
      </div>
    </div>
  </div>
</div>
<div class="col-sm-6">
  <div class="card">
    <div class="card-body">
    <img
          className="projectImage"
          src={require("../assets/img/codingquiz.png")}
          alt="Weather API Project"
        ></img>
      <h5 class="card-title">Coding Quiz</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <div className="linkBtns">
      <a href="https://kay-annn.github.io/My-Coding-Quiz/" class="btn btn-primary"  target="_blank"
              rel="noreferrer">Deployed Application</a>
      <a href="https://github.com/Kay-Annn/My-Coding-Quiz.git" class="btn btn-primary"  target="_blank"
              rel="noreferrer">GitHub Repository</a>
      </div>
    </div>
  </div>
</div>
</div>
</div>
    )
}

export default ProjectComponent;