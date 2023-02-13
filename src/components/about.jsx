import React from "react";


const AboutComponent = () => {
    const name = "Kay";
    return (
        <div className='shortIntro'>
          <div className="aboutImgHeading">
            <img className="card-img" src={require("../assets/img/portfoliopic.png")} alt="girl in grad cap and gown">
              </img>
            <h1 className="aboutHeading">Hi, my name is {name}! </h1>
            </div>
          <p className="aboutParagraph">
            Welcome to my portfolio. I am full stack web developer based in Toronto, Canada.
           I have a background in healthcare but I have always been curious regarding how the web functions and how applications come together.
           My curiosity pushed me to pursue a career in web development and I have been loving the journey from the start.
          </p>
          </div> 
    )
}

export default AboutComponent;