
import '../hojas-de-estilo/Testimonio.css'


const Testimonios = ({ testimonio }) => {
    return ( 
        <div className='contenedor-testimonio'>
             
        <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'><strong>{testimonio.nombre}</strong> en {testimonio.pais} </p>
            <p className='cargo-testimonio'>{testimonio.cargo} en <strong>{testimonio.empresa}</strong></p>
            <p className='texto-testimonio'>"{testimonio.testimonio}"</p>
        </div>
        </div>
     );
}
 
export default Testimonios;