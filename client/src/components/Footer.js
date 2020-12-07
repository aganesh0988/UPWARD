import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = props => {

    return (
        <footer className="footer-container">
            <div className="footer-container__elements">
                <h4>Designed by Andrea Jackson</h4>
                <a>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </footer>
    )

}

export default Footer;
