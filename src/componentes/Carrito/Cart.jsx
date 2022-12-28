import React, {useContext} from 'react'
import { cartContexto } from '../../Storage/ContextCart'
import ArtList from './ArtList'
import "./cart.css"



function Cart() {
  const contextoCartInfo = useContext(cartContexto)
  const cart = contextoCartInfo.contenidoCart()
  console.log(cart)
  return (
    <div>
      <ArtList articulos={cart}/>
    </div>
  )
}

export default Cart