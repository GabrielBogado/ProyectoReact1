import React from 'react'
import { Link } from 'react-router-dom'
import Toogle from '../Toogle/ToogleBoton'
import "./Item.css"

function Item(props) {
  let urlID = `/item/${props.id}`

  return (
    <Link className='linkEstilo' to={urlID}>
      <div className="contenedorItem">
        <Toogle className="acomodarToogle"/>
        <div className="contenedorImagen">
            <img src={props.img} title={props.nombre} alt={props.nombre}/>
        </div>
        <div className="detallesCarta">
            <h2>{props.nombre}</h2>
            <h4>$ {props.precio}</h4>
            <p className="tipo">{props.tipo}</p>
        </div>
    </div>
    </Link>
  )
}

export default Item