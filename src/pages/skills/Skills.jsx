import React from 'react'
import Footer from '../../components/footer/Footer';
import HeaderS from '../../components/headerS/HeaderS';
import Menu from '../../components/menu/Menu';
import Skill from '../../components/skill/Skill.jsx';

function Skills() {
  return (
    <div className='Skills'>
        <Menu/>
        <HeaderS/>
        <Skill/>
        <Footer/>    
    </div>
  )
}

export default Skills;