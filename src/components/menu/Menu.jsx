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
                <input type="checkbox" id="check" checked></input>
                <label for="check" className="checkbtn">
                <FontAwesomeIcon icon={faBars} />
                </label>
                <ul>
                    <li>
                        <Link to="/home" className='item'><i><FontAwesomeIcon icon={faIgloo} /> </i>About Me</Link>
                    </li>

                    <li>
                        <Link to="" className='item'><i><FontAwesomeIcon icon={faHammer} /> </i>Projects</Link>
                    
                        
                    </li>

                    <li>
                        <Link to="/us" className='item'><i><FontAwesomeIcon icon={faLaptopCode} /></i> Skills
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/contact" className='item'><i><FontAwesomeIcon icon={faGraduationCap} /></i> Studies
                    </Link>
                    </li>

                    
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Menu;