import React, { useState, useEffect } from 'react'

import axios from 'axios'
import '../App.css'
import Testimonio from '../components/Testimonio'


function Inicio() {

    const[testimonios, setTestimonio ] = useState([])

    useEffect(() =>{
        axios.get('/get/')
        .then((response) => {
            setTestimonio(response.data)
        }).catch(()=>{
            alert('Algo fue mal')
            
        })
    }, [])

    return(

    <div className='App'>
       <div className='contenedor-principal'>
        <h1>Aqui lo que nuestros alumnos dice de Freecodecamp</h1>
        {
            testimonios.map((testimonio)=>(
                <Testimonio
                key={testimonio.nombre}
                testimonio={testimonio}
                >

                </Testimonio>
            ))
        }
        </div>
    </div>
    )
}

    
export default Inicio