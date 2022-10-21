import React from 'react'
import dropdown from './static/images/menu-modified.png'


const Header = ({OpenClose, OpenWindow}) => {

  return (
    <header>
        <nav className='nav_bar'>
            <div className='logo'>
                <p> Horror stories </p>
            </div>
            <div className='account_link'>
                <a href='#'>About</a>
                <a href='#' onClick={OpenWindow}>Account</a>
            </div>
            <div className='compact_menu_image'>
                <img src={dropdown} onClick={OpenClose}/>
            </div>
        </nav>
    </header>
  )
}

export default Header