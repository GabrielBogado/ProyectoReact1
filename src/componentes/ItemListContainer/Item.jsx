import React from 'react'
import { Link } from 'react-router-dom'
import Toogle from '../Toogle/ToogleBoton'
import "./Item.css"

function Item(props) {
  let urlID = `/item/${props.id}`

  return (
    <div className="contenedorItem">
        <Toogle className="acomodarToogle"/>
        <Link className='linkEstilo' to={urlID}>
        <div className="contenedorImagen">
            <img src={props.img} title={props.nombre} alt={props.nombre}/>
        </div>
        <div className="detallesCarta">
            <h2>{props.nombre}</h2>
            <h4>$ {props.precio}</h4>
            <h5 className="tipo">{props.tipo}</h5>
        </div>
    </Link>
    </div>
  )
}

export default Item