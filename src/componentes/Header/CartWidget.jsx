import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { cartContexto } from '../../Storage/ContextCart'
import "./CartWidget.css"

function CartWidget() {
  const contextoCartWidget = useContext(cartContexto)
  let cantidad = contextoCartWidget.getQuantityCart()
  return (
    <div>
      <Link to="/cart">
      <span>🛒</span>
      <span className='contadorCartNoti'>{cantidad}</span>
      </Link>
    </div>
  )
}

export default CartWidget