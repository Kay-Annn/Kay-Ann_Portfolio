import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTwitterSquare} from '@fortawesome/free-brands-svg-icons'

const FooterComponent = () => {
    return (
        <footer className="w-100 mt-auto text-dark p-4 footer navbar-fixed-bottom">
            <div className="container text-center mb-5 footerItems" >
                <h4>Kay-Ann's Portfolio made with &#10083; by Kay</h4>
                <a href="https://github.com/Kay-Annn"><FontAwesomeIcon icon={faGithub} size = '2x' /></a>
                <a href="https://www.linkedin.com/in/kay-ann-williams-2498b872/"><FontAwesomeIcon icon={faLinkedinIn} size = '2x'/></a>
                <a href="https://twitter.com/kaykoding"><FontAwesomeIcon icon={faTwitterSquare} size = '2x'/></a>
            </div>
        </footer>
    )
}

export default FooterComponent;