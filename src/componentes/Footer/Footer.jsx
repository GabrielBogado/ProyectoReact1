import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='contenedorFooter'>
        <div className="contenedorCopy">
            <p>Todos los derechos reservado VeranOff 2023</p>
        </div>
        <div className="contenedorGit">
            <Link to="https://github.com/GabrielBogado/ProyectoReact1"><img src="../../img/gitHub.jpg" alt='Logo Github'/></Link>
        </div>
    </div>
  )
}

export default Footer