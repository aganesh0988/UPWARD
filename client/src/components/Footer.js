import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngellist, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = props => {

    return (
        <footer className="footer-container">
            <div className="footer-container__elements">
                <a className="footer-container__elements-icons">
                    <h4>Designed by Andrea Jackson</h4>
                </a>
                <a className="footer-container__elements-icons">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a className="footer-container__elements-icons">
                    <FontAwesomeIcon icon={faAngellist} />
                </a>
                <a className="footer-container__elements-icons">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </footer>
    )

}

export default Footer;
