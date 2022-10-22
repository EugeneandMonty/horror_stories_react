import React from 'react'
import dropdown from './static/images/menu-modified.png'


const Header = ({OpenClose, About, Account}) => {

  return (
    <header>
        <nav className='nav_bar'>
            <div className='logo'>
                <p> Horror stories </p>
            </div>
            <div className='account_link'>
                {About}
                {Account}
            </div>
            <div className='compact_menu_image'>
                <img src={dropdown} onClick={OpenClose}/>
            </div>
        </nav>
    </header>
  )
}

export default Header