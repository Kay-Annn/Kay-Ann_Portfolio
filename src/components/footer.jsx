import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTwitterSquare} from '@fortawesome/free-brands-svg-icons'

const FooterComponent = () => {
    return (
        <footer className="w-100 mt-auto text-dark p-4 navbar-fixed-bottom">
            <div className="container text-center mb-53 footerItems" >
                <h4>Kay-Ann's Portfolio made with &#128147; by Kay</h4>
                <div className="socialIcons">
                <a href="https://github.com/Kay-Annn" className="socialLinks" ><FontAwesomeIcon icon={faGithub} size = '2x' /></a>
                <a href="https://www.linkedin.com/in/kay-ann-williams-2498b872/" className="socialLinks" ><FontAwesomeIcon icon={faLinkedinIn} size = '2x'/></a>
                <a href="https://twitter.com/kaykoding" className="socialLinks" ><FontAwesomeIcon icon={faTwitterSquare} size = '2x'/></a>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent;