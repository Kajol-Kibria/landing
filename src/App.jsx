import React from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import Footer from './components/Footer'

export default function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/privacy-policy"} element={<Privacy/>}/>
      <Route path={"/terms&conditions"} element={<Terms/>}/>
    </Routes>
     <Footer/>
    </BrowserRouter>
    
  )
}
