import React from 'react'
import Toogle from '../Toogle/ToogleBoton'
import "./Item.css"

function Item(props) {
  return (
      <div className="contenedorItem">
        <Toogle className="acomodarToogle"/>
        <div className="contenedorImagen">
            <img src={props.img} title={props.nombre} alt="Imagen Producto"/>
        </div>
        <div className="detallesCarta">
            <h2>{props.nombre}</h2>
            <h4>$ {props.precio}</h4>
            <p className="tipo">{props.tipo}</p>
        </div>
    </div>
  )
}

export default Item