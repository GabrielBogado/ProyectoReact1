import React, {useContext} from 'react'
import { cartContexto } from '../../Storage/ContextCart'
import ArtList from './ArtList'
import "./cart.css"
import { Link } from 'react-router-dom'



function Cart() {
  const contextoCartInfo = useContext(cartContexto)
  const cart = contextoCartInfo.contenidoCart()
  
  /* console.log(cart) */
  return (
    <div>
      {
        cart.length === 0 ? <></> : <ArtList articulos={cart}/>

      }
      {cart.length > 0 ? <button><Link to="/checkout">Terminar Compra</Link></button> : <button><Link to="/">Seguir Comprando</Link></button>}
    </div>
  )
}

export default Cart