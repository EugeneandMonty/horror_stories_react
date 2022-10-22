import React from 'react'
import arrow from './static/images/double_arrow-modified.png'
import Section from './Section';
import data from '../data'
import { useState, useEffect } from 'react';


const Content = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  useEffect(() => {
    window.addEventListener('resize', e => {
      setWindowWidth(window.innerWidth);
    });
  }, [window.innerWidth]);

  const data_len = data.length;
  let [len, setLen] = useState(12)

  const changeLen = () => {
    let n = 0;
    if (windowWidth >= 1820) {n = 6}
    if (windowWidth < 1820) {n = 4}
    if (windowWidth <= 1250) {n = 3}
    if (windowWidth <= 900) {n = 2}
    if (windowWidth <= 680) {n = 1}
    if (len <= data_len) {
      setLen(len += n)
    } else {
      setLen(12)
    }
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