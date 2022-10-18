import React from 'react'
import arr_right from './static/images/arr_right_modified.png'
import arrow from './static/images/double_arrow-modified.png'
import Section from './Section';


const Content = () => {

  return (
        <div className='sect'>

            <Section/>

            <img className='arr_down' src={arrow}/>

        </div>
  )
}

export default Content