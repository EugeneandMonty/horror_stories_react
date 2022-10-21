import React from 'react'
import close from './static/images/close.png'

const Window = ({OpenWindow}) => {
  return (
    <div>
        <div class="window" id="login" method="post">

            <div class="inp1">

            <input type="text" placeholder="Email" name="email"/>
            <input  type="text" placeholder="User Name" name="username"/>
            <input type="text" placeholder="Password" name="password"/>
            <button class="submit_login" type="submit"> Submit </button>
            <a href="#">
                <img class="close" src={close} onClick={OpenWindow} alt="close"/>
            </a>
            <div class="sign">
                <p>Do not have an account?</p>        
                <a href="/signup">Sign up</a>
            </div>
            </div>            
        </div>
    </div>
  )
}

export default Window