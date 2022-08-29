import React from 'react';
import {Link} from 'react-router-dom';
import './../menu/Menu.css';
import Logo from './../menu/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars, faGraduationCap, faHammer, faIgloo, faLaptopCode} from '@fortawesome/free-solid-svg-icons';

function Menu() {
  return (
    <div>
         <header>
            <nav>
                <Link to="/portfolio" className='item'>
                <img class="logo" src={Logo} alt="Logo Portfolio" /></Link>
                <input type="checkbox" id="check"></input>
                <label for="check" className="checkbtn">
                <FontAwesomeIcon icon={faBars} />
                </label>
                <ul>
                    <li>
                        <Link to="/home" className='item'><FontAwesomeIcon icon={faIgloo} /></Link>
                    </li>

                    <li>
                    <div class="dropdown">
                            <div className="dropbtn item"><FontAwesomeIcon icon={faHammer} /></div>
                            <div className="dropdown-content">
                                <div className='dropdown-box'>
                                <Link to="/workus">Nuestro Trabajo</Link>
                            <Link to="/projects">Prevención, Formación y asistencia</Link>
                                </div>
                            
                            </div>
                        </div>
                    </li>

                    <li>
                        <Link to="/us" className='item'><FontAwesomeIcon icon={faLaptopCode} />
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/contact" className='item'><FontAwesomeIcon icon={faGraduationCap} />
                    </Link>
                    </li>

                    
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Menu;