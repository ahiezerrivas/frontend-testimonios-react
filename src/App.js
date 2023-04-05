import React, { useState, useEffect} from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import axios from 'axios';
import './App.css'
import  Testimonio  from './components/Testimonio'

import Inicio from './pages/Inicio'

function App() {
 
  return(

  <BrowserRouter>
    <div >
      <Routes>

          <Route exact path="/" element={<Inicio />} />
      </Routes>

    </div>
  </BrowserRouter>
  )
}

export default App;
