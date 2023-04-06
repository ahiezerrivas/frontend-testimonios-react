import React, { useState } from 'react'
import  '../hojas-de-estilo/Formulario.css'
import  { useForm } from 'react-hook-form'
import axios from 'axios'


function Cargar(){

     const [testimonio, setTestimonio ] = useState('');
    

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        
        axios.post(/post/,{
            nombre:data.nombre,
            cargo:data.cargo,
            pais:data.pais,
            empresa:data.empresa,
            testimonio:data.testimonio
        })
        .then((response)=> {
            setTestimonio(response.data)
        })
       
    }

    


 

    return(
        <div>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label>Nombre</label>
                    <input type='text' {...register('nombre', {
                        required:true,
                    })} />
                </div>    
                <div>
                    <label>cargo</label>
                    <input type='text'{...register('cargo', {
                        required:true,
                    })}  />
                </div>    
                <div>
                    <label>Pais</label>
                    <input type='text' {...register('pais', {
                        required:true,
                    })} />
                </div>    
                <div>
                    <label>empresa</label>
                    <input type='text' {...register('empresa', {
                        required:true,
                    })} />
                </div>    
                <div>
                    <label>testimonio</label>
                    <input type='textarea' {...register('testimonio', {
                        required:true,
                    })}  />
                </div>    
                <input className='botons pointer' type='submit' value='Registrar'  />
            </form>
        </div>

    // <div className='form-register'>
    //     <form>

    //         <h4>
    //             Formulario para Cargar Testimonio
    //         </h4>
    //         <input className='controls' type='text' name='nombre' id='nombre' placeholder='Ingrese su nombre'>
                
    //         </input>
    //         <input className='controls' type='text' name='cargo' id='cargo' placeholder='Ingrese su cargo'>

    //         </input>
    //         <input className='controls' type='text' name='pais' id='pais' placeholder='Ingrese su pais'>

    //         </input>
    //         <input 
    //             onClick={handleSubmit}
    //             className='controls' 
    //             type='text' 
                
                
    //             placeholder='Ingrese su testimonio'>

    //         </input>

    //         <input className='botons pointer' type='submit' value='Registrar'  />
    //     </form>

    // </div>
    )
}

export default Cargar