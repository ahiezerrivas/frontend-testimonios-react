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
import Cargar from './pages/Cargar';
function App() {
 
  return(

  <BrowserRouter>
    <div >
      <Routes>

          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/post" element={<Cargar />} />
      </Routes>

    </div>
  </BrowserRouter>
  )
}

export default App;
