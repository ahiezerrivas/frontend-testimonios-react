import React, { useState } from 'react'
import  '../hojas-de-estilo/Formulario.css'

import axio from 'axios'


function Cargar(){


    return(
    <div className='form-register'>
        <h4>
            Formulario para Cargar Testimonio
        </h4>
        <input className='controls' type='text' name='nombre' id='nombre' placeholder='Ingrese su nombre'>
            
        </input>
        <input className='controls' type='text' name='cargo' id='cargo' placeholder='Ingrese su cargo'>

        </input>
        <input className='controls' type='text' name='pais' id='pais' placeholder='Ingrese su pais'>

        </input>
        <input className='controls' type='text' name='testimonio' id='testimonio' placeholder='Ingrese su testimonio'>

        </input>

        <input className='botons pointer' type='submit' value='Registrar'  />

    </div>
    )
}

export default Cargar