import React from 'react';
import {Link} from 'react-router-dom';
import './../menu/Menu.css';
import Logo from './../menu/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars, faGraduationCap, faHammer, faIgloo, faLaptopCode} from '@fortawesome/free-solid-svg-icons';

function Menu() {
  return (
            <nav>
                
                    <Link to="/portfolio" className='item'>
                    <img class="logo" src={Logo} alt="Logo Portfolio" /></Link>
                    <input type="checkbox" id="check"></input>
                    <label for="check" className="checkbtn">
                    <FontAwesomeIcon icon={faBars} />
                    </label>
                
                
                <ul>
                    <li>
                        <Link to="/home" className='item'><i><FontAwesomeIcon icon={faIgloo} /> </i>About Me</Link>
                    </li>

                    <li>
                        <Link to="/projects" className='item'><i><FontAwesomeIcon icon={faHammer} /> </i>Projects</Link>
                    
                        
                    </li>

                    <li>
                        <Link to="/skills" className='item'><i><FontAwesomeIcon icon={faLaptopCode} /></i> Skills
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/studies" className='item'><i><FontAwesomeIcon icon={faGraduationCap} /></i> Studies
                    </Link>
                    </li>

                    
                </ul>
            </nav>
  )
}

export default Menu;