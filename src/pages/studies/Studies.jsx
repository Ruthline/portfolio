import React from 'react'
import Footer from '../../components/footer/Footer';
import HeaderE from '../../components/headerE/HeaderE';
import Menu from '../../components/menu/Menu';
import Study from '../../components/study/Study.jsx';

function Studies() {
  return (
    <div className='Study'>
        <Menu/>
        <HeaderE/>
        <Study/>
        <Footer/>
    </div>
  )
}

export default Studies;