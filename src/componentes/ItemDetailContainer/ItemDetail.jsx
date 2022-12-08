import React from 'react'
import "./itemDetail.css"
import ContadorItems from '../ContadorItems/ContadorItems'

function ItemDetail(props) {
  return (
    <div className="contenedorCardDetalle">
      <div className="contenedorImg"><img src={props.producto.imagen} alt={props.producto.nombre} title={props.producto.nombre} /></div>
    <div className='contenedorDetail'>
        <h1>{props.producto.nombre}</h1>
        <p>{props.producto.tipo}</p>
        <h3>$ {props.producto.precio}</h3>
      </div>
      <div /* className="contenedorContadorDetail" */>
        <ContadorItems stock={props.producto.stock}/>
      </div>
      </div>
  )
}

export default ItemDetail