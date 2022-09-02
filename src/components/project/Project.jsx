import React from 'react'
import {getAllStudy} from './projects';
import "../project/Project.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye} from '@fortawesome/free-solid-svg-icons'
function Project() {
    const projects=getAllStudy();
  return (
    <main className='box-p'>
                    {projects.map(projects=>

                    <div  key={projects.id}className='list-projects'>
                        
                        <div className='list-image'><img src={projects.pimage} alt="Logo" /></div>

                        <div className='list-titulo'><h3>{projects.titulo}</h3></div>


                        <div className='list-frame'><p>{projects.framework}</p></div>

                        <div className='list-año'><p>{projects.añoFin}</p></div>

                        <div className='btn-project'>
                            <a href={projects.url} target="_blank">See <i><FontAwesomeIcon icon={faEye} /></i></a>
                        </div>
                    </div>
                        )}
                </main>
  )
}

export default Project;