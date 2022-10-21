import React from 'react'

const DropDown = ({OpenWindow}) => {
  return (
    <div className='dropdown_menu'>
        <a href='#'>About</a>
        <a href='#' onClick={OpenWindow}>Account</a>
    </div>  
  )
}

export default DropDown