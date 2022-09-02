import React from 'react'
import {getAllStudy} from './Skill';
import "../skill/Skill.css";
function Skill() {
    const skills=getAllStudy();
  return (
    <main className='box-s'>
                    {skills.map(skills=>

                    <div  key={skills.id}className='list-skills'>
                        
                        <div className='list-is'><img src={skills.pimage} alt="Logo" /></div>

                        <div className='list-l'><h3>{skills.frame}</h3></div>

                    </div>
                        )}
                </main>
  )
}

export default Skill;