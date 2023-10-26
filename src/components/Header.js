import React from 'react'
import "./Header.css"
import Navbar from './Navbar'

const Header = () => {
  return (
   <div className='main-wrapper' id='home'>
    <div className='center-wrap'>
    <label className='logo'>The Barber</label>
    <label className='sub-logo'>Cortesia, stile e precisione, dove ogni taglio è un'opera d'arte</label>
    </div>
   </div>
  )
}

export default Header