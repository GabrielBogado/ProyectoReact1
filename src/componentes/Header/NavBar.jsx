import React from 'react'
import CartWidget from './CartWidget'
import "./NavBar.css"

function NavBar() {
    const Lists = [
        {nombre: "Aire Acondicionado", link: "/"},
        {nombre: "Ventiladores", link:"/"},
        {nombre: "Estufas", link: "/"},
        {nombre: "Caloventores", link: "/"},
];
  return (
    <div className="navBar">
        <img src="/img/logo.png" alt="VeranOff" />
            <ul>
                <li><a href="#">Aire Acondicionado</a></li>
                <li><a href="#">Ventiladores</a></li>
                <li><a href="#">Estufas</a></li>
                <li><a href="#">Caloventores</a></li>
            </ul>
        <CartWidget />
    </div>
  )
}

export default NavBar