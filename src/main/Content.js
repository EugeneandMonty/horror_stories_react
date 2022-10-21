import React from 'react'
import arrow from './static/images/double_arrow-modified.png'
import Section from './Section';
import data from '../data'
import { useState } from 'react';


const Content = () => {

  const data_len = data.length;
  let [len, setLen] = useState(12)
  let changeLen = () => {
    len <= data_len ? setLen(len += 6) : setLen(12)
  }


  return (
        <div className='sect'>

            <Section
            data = {data.slice(0, len)}
            />
            <img className='arr_down' onClick={changeLen} src={arrow}/>

        </div>
  )
}

export default Content