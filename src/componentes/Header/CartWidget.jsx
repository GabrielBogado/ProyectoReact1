import React from 'react'
import {Link} from "react-router-dom"
import "./CartWidget.css"

function CartWidget() {
  return (
    <Link to="/cart" title='Ir al carrito'>🛒</Link>
  )
}

export default CartWidget