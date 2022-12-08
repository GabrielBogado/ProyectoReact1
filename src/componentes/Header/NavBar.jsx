import React from 'react'
import CartWidget from './CartWidget'
import "./NavBar.css"
import { Link} from "react-router-dom"

function NavBar() {
  return (
    <div className="navBar">
            <div className="contenedorLogo">
              <Link to="/"><img src="/img/logo.png" alt="VeranOff" title='VeranOff' /></Link>
            </div>
            <div className="contenedorLista">
              <ul>
                  <li><Link to="/categoria/aireacondicionado">Aire Acondicionado</Link></li>
                  <li><Link to="/categoria/ventilador">Ventiladores</Link></li>
                  <li><Link to="/categoria/estufa">Estufas</Link></li>
                  <li><Link to="/categoria/caloventor">Caloventores</Link></li>
              </ul>
            </div>
            <div className="contenedorCart">
              <CartWidget />
            </div>
    </div>
  )
}

export default NavBar