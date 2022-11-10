import React from 'react';
import Header from './main/Header';
import Footer from './main/Footer';
import Content from './main/Content';
import Window from './main/Window';
import DropDown from './main/DropDown';
import './main/static/main.scss';
import { useState } from 'react';

function Main() {

  const [footerState, setFooterState] = useState(true);
  const ShowHide = () => {window.scrollY > 100  ? setFooterState(false) : setFooterState(true);}

  const [window_log, setWindow_log] = useState(false);
  const OpenWindow = () => {
    if (!window_log) {
      setWindow_log(true); setState(false)
    } else {
      setWindow_log(false)
    }
  }

  const [state, setState] = useState(false);
  const OpenClose = () => {!state ? setState(true) : setState(false)};

  window.addEventListener('scroll', ShowHide)

  return (
    <section id='main'>

      <Header
      OpenClose={OpenClose}  
      About={<a href='#'>About</a>}
      Account={<a href='#' onClick={OpenWindow}>Account</a>}
      />  

      {state ? <DropDown OpenWindow={OpenWindow} /> : null }

      <Content/>

      {window_log ? <Window OpenWindow={OpenWindow}/> : null}

      {footerState ? <Footer/> : null}

    </section>
  )
}

export default Main;
