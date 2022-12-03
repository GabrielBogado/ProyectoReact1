import React from 'react'

function ItemDetail(props) {
  return (
    <div className="contenedorCardDetalle">
    <div className='contenedorDetail'>
        <h1>titulo producto</h1>
        <p>detalle</p>
        <h3>precio</h3>
    </div>
    <div className="contenedorImg"><img src="/" alt="" /></div>
    </div>
  )
}

export default ItemDetail