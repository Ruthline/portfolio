import React from 'react'
import Footer from '../../components/footer/Footer';
import HeaderP from '../../components/headerP/HeaderP';
import Menu from '../../components/menu/Menu';
import Project from '../../components/project/Project';

function Projects() {
  return (
    <div className='Projects'>
        <Menu/>
        <HeaderP/>
        <Project/>
        <Footer/>
    </div>
  )
}

export default Projects;