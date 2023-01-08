import React, {useContext} from 'react'
import { cartContexto } from '../../Storage/ContextCart'
import ArtList from './ArtList'
import "./cart.css"
import { Link } from 'react-router-dom'
import { alertOrdenCreada } from '../Alertas/Alertas'
import { crearOrden } from '../../services/firebase'



function Cart() {

  const {cart, eliminarCart, totalCarrito} = useContext(cartContexto)

  function crearOrdenCheckout(){
    const orden = {
      buyer:{
        nombre: "Gabi",
        email:"g@g",
        celular:1234
      },
      productosComprados: cart,
      total:123,
      date: new Date()
    }
    crearOrden(orden)
    alertOrdenCreada()
    eliminarCart()
  }
  return (
    <>
    <div className='artList'>
      {
        cart.length === 0 ? <></> : <ArtList articulos={cart}/>

      }
      </div>
      {<div className='botonesArt'>
      {cart.length > 0 ?  <div><h2>TOTAL: ${totalCarrito()}</h2><button onClick={() => crearOrdenCheckout()}>{/* <Link to="/checkout"> */}Terminar Compra{/* </Link> */}</button> <button onClick={()=> eliminarCart()}>Vaciar Carrito</button></div>: <button><Link to="/">Seguir Comprando</Link></button>}
    </div>}
    </>
  )
}

export default Cart