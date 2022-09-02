import React from 'react';
import './../footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {  faEnvelope} from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
    <div>
        <footer className='footer'>
            <div className="copyright">
                <p>Develop by Ruth 2022</p>
            </div>

            <div className='social'>
                <a href="https://github.com/Ruthline" target="_blank">
                    <i><FontAwesomeIcon icon={faGithub} /> </i>
                </a>
                <a href='mailto:rutheveline@hotmail.es' target="_blank"> <i><FontAwesomeIcon icon={faEnvelope}/></i></a>

                <a href="https://www.linkedin.com/in/ruth-rodriguez-82744a222/" target="_blank"><i><FontAwesomeIcon icon={faLinkedinIn} /> </i></a>
            
            </div>
        </footer>
    </div>
  )
}

export default Footer;