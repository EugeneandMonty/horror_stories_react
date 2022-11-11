import React from 'react'
import arrow from './static/images/double_arrow-modified.png'
import Section from './Section';
import { useState, useEffect } from 'react';


const Content = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  async function fetching() {
    await fetch('http://localhost:5000/shortall')
    .then((res) => res.json())
    .then((data) => setStories(data))
  };

  const [stories, setStories] = useState([]);

  useEffect(() => {fetching()}, []);

  useEffect(() => {
  window.addEventListener('resize', e => {
    setWindowWidth(window.innerWidth);
    });
  }, [window.innerWidth]);

  const data_len = stories.length;
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
            data = {stories.slice(0, len)}
            />
            <img className='arr_down' onClick={changeLen} src={arrow}/>

        </div>
  )
}

export default Content