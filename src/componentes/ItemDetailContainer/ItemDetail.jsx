import React, { useState, useContext} from 'react'
import {Link, useNavigate} from "react-router-dom"
import "./itemDetail.css"
import ContadorItems from '../ContadorItems/ContadorItems'
import { cartContexto } from '../../Storage/ContextCart'
import { alertaAgregadoCarrito } from '../Alertas/Alertas'
function ItemDetail(props) {
  const [countEnCart, setCountEnCart] = useState(0)
  const {addToCart} = useContext(cartContexto)

  function handleAddToCart(count){
    setCountEnCart(count)
    addToCart(props.producto, count)
    alertaAgregadoCarrito(props.producto.nombre)
  }
  let navigateTo = useNavigate()

  return (
    <div className="contenedorCardDetalle">
      <div className="contenedorImg"><img src={props.producto.imagen} alt={props.producto.nombre} 
      title={props.producto.nombre} /></div>
    <div className='contenedorDetail'>
        <h1>{props.producto.nombre}</h1>
        <p>{props.producto.tipo}</p>
        <h3>$ {props.producto.precio}</h3>
      </div>
      <div>
        { countEnCart > 0 ?
        <div className="contenedorDuo irCenter">
          <Link to="/cart" className='irCarrito'>Ir al Carrito</Link>
          <button className='bSeguir' onClick={()=> navigateTo("/")}>Seguir Comprando</button>
        </div> :
        <ContadorItems onAddToCart={handleAddToCart} stock={props.producto.stock}/>}
      </div>
      </div>
  )
}

export default ItemDetail