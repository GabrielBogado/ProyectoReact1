import React from 'react'
import "./itemDetail.css"

function ItemDetail(props) {
  return (
    <div className="contenedorCardDetalle">
      <div className="contenedorImg"><img src={props.producto.imagen} alt="" /></div>
    <div className='contenedorDetail'>
        <h1>{props.producto.nombre}</h1>
        <p>{props.producto.tipo}</p>
        <h3>{props.producto.precio}</h3>
      </div>
      </div>
  )
}

export default ItemDetail