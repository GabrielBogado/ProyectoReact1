import React,{useContext} from 'react'
import { alertOrdenCreada } from '../Alertas/Alertas'
import { crearOrden } from '../../services/firebase'
import { cartContexto } from '../../Storage/ContextCart'
import CheckoutFormulario from './CheckoutFormulario'

function TerminarCompra() {
  const{cart, eliminarCart, totalCarrito} = useContext(cartContexto)

  function crearOrdenCheckout(datoComprador){
    const orden = {
      buyer:{
        nombre: datoComprador.nombre,
        email: datoComprador.email,
        celular: datoComprador.telefono
      },
      productosComprados: cart,
      total:totalCarrito(),
      date: new Date()
    }
    crearOrden(orden).then(
      (id)=>{
        alertOrdenCreada(id)
        eliminarCart()
      }
    )
  }
  return (
    <div className='redireccionCompra'>
      <CheckoutFormulario onCheck={crearOrdenCheckout}/>
    </div>
  )
}

export default TerminarCompra