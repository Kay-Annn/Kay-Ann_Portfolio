import React from "react";


const AboutComponent = () => {
    const name = "Kay";
    return (
        <div className='shortIntro'>
            <img class="card-img" src="https://media.licdn.com/dms/image/C5603AQFEV6kRMrm51Q/profile-displayphoto-shrink_800_800/0/1548464452058?e=2147483647&v=beta&t=mEDJ7slInhwK5D8fMKgWMkOF_UfWXv2xVBL-WvWOmSA" alt="girl in grad cap and gown">
              </img>
            <h1>Hi, my name is {name}! </h1>
          <p>
            Welcome to my portfolio. I am full stack web developer based in Toronto, Canada.
           I have a background in healthcare but I have always been curious regarding how the web functions and how applications come together.
           My curiosity pushed me to pursue a career in web development and I have been loving the journey from the start.
          </p>
          </div> 
    )
}

export default AboutComponent;