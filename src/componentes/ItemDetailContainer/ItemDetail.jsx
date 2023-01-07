import React, { useState, useContext} from 'react'
import {Link} from "react-router-dom"
import "./itemDetail.css"
import ContadorItems from '../ContadorItems/ContadorItems'
import { cartContexto } from '../../Storage/ContextCart'
function ItemDetail(props) {
  const [countEnCart, setCountEnCart] = useState(0)
  const {addToCart} = useContext(cartContexto)

  function handleAddToCart(count){
    setCountEnCart(count)
    addToCart(props.producto, count)
  }

  return (
    <div className="contenedorCardDetalle">
      <div className="contenedorImg"><img src={props.producto.imagen} alt={props.producto.nombre} 
      title={props.producto.nombre} /></div>
    <div className='contenedorDetail'>
        <h1>{props.producto.nombre}</h1>
        <p>{props.producto.tipo}</p>
        <h3>$ {props.producto.precio}</h3>
      </div>
      <div /* className="contenedorContadorDetail" */>
        { countEnCart > 0 ? <div className="contenedorDuo irCenter"><Link to="/cart" className='irCarrito'>Ir al Carrito</Link></div> : <ContadorItems onAddToCart={handleAddToCart} stock={props.producto.stock}/>}
      </div>
      </div>
  )
}

export default ItemDetail