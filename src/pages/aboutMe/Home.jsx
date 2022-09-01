import React from 'react'
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MainProfile from '../../components/mainProfile/MainProfile';
import Menu from '../../components/menu/Menu';

function Home() {
  return (
    <div className='Home'>
        <Menu/>
        <Header/>
    </div>
  )
}

export default Home;