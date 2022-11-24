import React from 'react'
import CartWidget from './CartWidget'
import "./NavBar.css"

function NavBar() {
    /* Array con listado y links
        const Lists = [
        {nombre: "Aire Acondicionado", link: "/"},
        {nombre: "Ventiladores", link:"/"},
        {nombre: "Estufas", link: "/"},
        {nombre: "Caloventores", link: "/"},
]; */
  return (
    <div className="navBar">
            <div className="contenedorLogo">
              <a href="/"><img src="/img/logo.png" alt="VeranOff" title='VeranOff' /></a>
            </div>
            <div className="contenedorLista">
              <ul>
                  <li><a href="/">Aire Acondicionado</a></li>
                  <li><a href="/">Ventiladores</a></li>
                  <li><a href="/">Estufas</a></li>
                  <li><a href="/">Caloventores</a></li>
              </ul>
            </div>
            <div className="contenedorCart">
              <CartWidget />
            </div>
    </div>
  )
}

export default NavBar