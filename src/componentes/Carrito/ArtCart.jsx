import React from 'react'
import "./artCart.css"

function ArtCart(props) {
  return (
    <div className='artCartContainer'>
        <div className="contenedorImgCart">
            <img src={props.img} title={props.nombre} alt={props.nombre} />
        </div>
        <div className="contenedorDetalleCart">
            <h2>{props.nombre}</h2>
            <h4>${props.precio}</h4>
            <p>{props.tipo}</p>
            <p>{props.count}</p>
        </div>

    </div>
  )
}

export default ArtCart