import React from 'react'
import './../header/Header.css'
import MyPicture from './../header/myPicture.png';
function Header() {
  return (
    <header className='head'>
        <div className='titles'>
            <h1>Hi, I'm Ruth!</h1>
        <h3>Frontend Developer</h3>
        </div>
        
        <div className='myPicture'>
            <img src={MyPicture} alt="Ruth Face" />
        </div>
    </header>
  )
}

export default Header;