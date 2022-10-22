import React from 'react'
import close from './static/images/close.png'

const Window = ({OpenWindow}) => {
  return (
        <div className='window'>

            <div className='form'>

              <input type='text' placeholder='Email' name='email'/>
              <input  type='text' placeholder='User Name' name='username'/>
              <input type='text' placeholder='Password' name='password'/>
              <button type='submit'> Submit </button>
              <a href='#'>
                  <img className='close' src={close} onClick={OpenWindow} alt='close'/>
              </a>
              <div className='sign'>
                  <p>Do not have an account?</p>        
                  <a href='#'>Sign up</a>
              </div>
            </div>            
        </div>
  )
}

export default Window