import React , {useState} from 'react'
import CartWidget from './CartWidget'
import "./NavBar.css"
import { Link} from "react-router-dom"

function NavBar() {
  const [menu , setMenu] = useState(false)

  function toggleMenu() {
    setMenu(!menu)
  }
  return (
    <div className="navBar">
            <div className="contenedorLogo">
              <Link to="/"><img src="/img/logo.png" alt="VeranOff" title='VeranOff' /></Link>
            </div>
            <div className="contenedorLista">
              <button onClick={toggleMenu} className="menuHamburguesa">
            <svg xmlns="http://www.w3.org/2000/svg"  className='svgButton' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            </button>
              <ul className={menu ? 'isActive': ""}>
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