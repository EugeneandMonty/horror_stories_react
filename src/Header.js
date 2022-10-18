import React from 'react'
import './static/main.scss';
import dropdown from './static/images/menu-modified.png'


const Header = ({state, OpenClose}) => {

  return (
    <header>
        <nav className='nav_bar'>
            <div className='logo'>
                <p> Horror stories </p>
            </div>
            <div className='account_link'>
                <a href='#'>About</a>
                <a href='#'>Account</a>
            </div>
            <div className='compact_menu_image'>
                <img src={dropdown} onClick={OpenClose}/>
            </div>
        </nav>

        <div className={`dropdown_menu ${state}`}>
            <a href='#'>About</a>
            <a href='#'>Account</a>
        </div>

    </header>
  )
}

export default Header