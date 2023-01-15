import React, {useContext} from 'react'
import { cartContexto } from '../../Storage/ContextCart'
import ArtList from './ArtList'
import "./cart.css"
import {  useNavigate} from 'react-router-dom'




function Cart() {

  const {cart, eliminarCart, totalCarrito} = useContext(cartContexto)
  let navigateTo = useNavigate()
  
  return (
    <div className='containerCart'>
    <div className='artList'>
      <div className="tituloCarrito">
        <h1>Mi carrito</h1>
      </div>
      {
        cart.length === 0 ? <></> : <ArtList articulos={cart}/>

      }
      </div>
      {<div className='botonesArt'>
      {cart.length > 0 ?  
      <div className="TCompra">
        <div className="total">
          <h2>TOTAL: ${totalCarrito()}</h2>
        </div>
        <div className="botonesTerminar">
          <button className='bTerminar' onClick={()=>navigateTo("/checkout")}>Terminar Compra</button>
          <button className='bVaciar' onClick={()=> eliminarCart()}>Vaciar Carrito</button>
          <button className='bSeguir' onClick={()=> navigateTo("/")}>Seguir Comprando</button>
          </div>
        </div>:
        <div className="carritoVacio">
            <h2>Su carrito esta vacio</h2>
            <p>Para seguir comprando, navegue por las categorias o busque su producto</p>
            <button onClick={()=> navigateTo("/")}>Seguir Comprando</button>
      </div>}
    </div>}
    </div>
  )
}

export default Cart