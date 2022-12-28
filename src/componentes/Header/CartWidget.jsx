import React, {useContext} from 'react'
import { cartContexto } from '../../Storage/ContextCart'
import { Link } from 'react-router-dom'
import "./CartWidget.css"

function CartWidget() {
  const contextoCartWidget = useContext(cartContexto)
  let cantidad = contextoCartWidget.getQuantityCart()
  return (
    <div>
      <Link to="/cart">
      <span>🛒</span>
      {
      cantidad > 0 && <span className='contadorCartNoti'>{cantidad}</span>
    }
      </Link>
    </div>
  )
}

export default CartWidget