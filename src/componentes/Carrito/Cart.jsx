import React, {useContext} from 'react'
import { cartContexto } from '../../Storage/ContextCart'



function Cart() {
  const contextoCartInfo = useContext(cartContexto)
  const cart = contextoCartInfo.contenidoCart()
  console.log(cart)
  return (
    <div>Futuro Carrito</div>
  )
}

export default Cart