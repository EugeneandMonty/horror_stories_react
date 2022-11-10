import React from 'react'
import Main from './Main';
import Account from './Account';
import { Link, Routes, BrowserRouter, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>

    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/account' element={<Account/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App