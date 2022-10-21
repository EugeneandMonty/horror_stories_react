import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import './static/main.scss';
import { useState } from 'react';
import { display } from './middleware';

function Main() {

  const [state, setState] = useState(display[0]);
  const OpenClose = () => {state === display[0] ? setState(display[1]) : setState(display[0])};

  const [footerState, setFooterState] = useState(true);
  const ShowHide = () => {
    window.scrollY > 100  ? setFooterState(false) : setFooterState(true);
  }

  window.addEventListener('scroll', ShowHide)

  return (
    <section>
      <Header
      state={state}
      OpenClose={OpenClose}
      />  
      <Content/>
      {footerState ? <Footer/> : null}
    </section>
  )
}

export default Main;
