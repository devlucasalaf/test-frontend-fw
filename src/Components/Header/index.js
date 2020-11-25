import React, { useState } from 'react'
import './styless.css'
import { Link } from 'react-scroll'

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const handleMenu = () => {
    if (window.innerWidth < 1024) {
      setOpenMenu(!openMenu)
    } else {
      return
    }
  }

  return (
    <div id='header-container'>
      <div id='header-wrapper'>
        <p>T.A</p>
        <div id={openMenu === false ? 'menu-wrapper-desktop' : 'menu-wrapper-mobile'}>
          <div id='menu-items'>
            <Link onClick={handleMenu} className='links-items' to='services-wrapper' offset={-105} duration={1000} smooth={true}>Serviços</Link>
            <Link onClick={handleMenu} className='links-items' to='diferenciais-wrapper' offset={-105} duration={1000} smooth={true}>Diferenciais</Link>
            <Link onClick={handleMenu} className='links-items' to='personas-wrapper' offset={-105} duration={1000} smooth={true}>Personas</Link>
            <button onClick={handleMenu} className='close-menu-burguer-btn'><img src='./header-assets/close-menu.png' alt='close-menu-burguer'></img></button>
          </div>
        </div>
        <button onClick={handleMenu} className='menu-burguer-btn'><img src='./header-assets/menu-icon.png' alt='menu-burguer'></img></button>
      </div>
    </div>
  )
}

export default Header