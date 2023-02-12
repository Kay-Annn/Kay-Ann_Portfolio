import React from "react";

function NavigationComponent (props) {
  const {
    setPageSelection,
    pageSelection
  } = props;
  
    return (
        <nav>
    <div className="navbar">
      <ul className="navElements text-decoration: none list-unstyled">
      <li className={pageSelection === 'About' ? 'active' : 'nav-link'} ><a href="#about" onClick={() => setPageSelection("About")}>About</a></li>
        <li className={pageSelection === 'Projects' ? 'active' : 'nav-link'} ><a href="#projects" onClick={() => setPageSelection("Projects")}>Projects</a></li>
        <li className={pageSelection === 'ContactMe' ? 'active' : 'nav-link'} ><a href="#contactme" onClick={() => setPageSelection("ContactMe")}>Contact Me</a></li>
        <li className={pageSelection === 'Resume' ? 'active' : 'nav-link'} ><a href="#resume" onClick={() => setPageSelection("Resume")}>Resume</a></li>
      </ul>
    </div>
  </nav>
 
    )
}

export default NavigationComponent;