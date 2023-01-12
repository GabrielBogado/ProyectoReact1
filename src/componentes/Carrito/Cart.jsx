import React, {useContext} from 'react'
import { cartContexto } from '../../Storage/ContextCart'
import ArtList from './ArtList'
import "./cart.css"
import { Link, useNavigate} from 'react-router-dom'




function Cart() {

  const {cart, eliminarCart, totalCarrito} = useContext(cartContexto)
  let navigateTo = useNavigate()
  
  return (
    <>
    <div className='artList'>
      {
        cart.length === 0 ? <></> : <ArtList articulos={cart}/>

      }
      </div>
      {<div className='botonesArt'>
      {cart.length > 0 ?  <div><h2>TOTAL: ${totalCarrito()}</h2><button onClick={()=>navigateTo("/checkout")}>Terminar Compra</button> <button onClick={()=> eliminarCart()}>Vaciar Carrito</button></div>: <button><Link to="/">Seguir Comprando</Link></button>}
    </div>}
    </>
  )
}

export default Cart