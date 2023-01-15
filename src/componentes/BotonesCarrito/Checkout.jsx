import React,{useContext} from 'react'
import { alertOrdenCreada } from '../Alertas/Alertas'
import { crearOrden } from '../../services/firebase'
import { cartContexto } from '../../Storage/ContextCart'
import CheckoutFormulario from './CheckoutFormulario'

function TerminarCompra() {
  const{cart, eliminarCart, totalCarrito} = useContext(cartContexto)
  let ordenCart = cart.map((item)=>{
    return{
      nombreProducto: item.nombre,
      tipoProducto: item.tipo,
      precioProducto: item.precio,
      id: item.id,
      cantidadProductos: item.count
    }
  })

  function crearOrdenCheckout(datoComprador){
    const orden = {
      buyer:{
        nombre: datoComprador.nombre,
        email: datoComprador.email,
        celular: datoComprador.telefono
      },
      productosComprados: ordenCart,
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
      <h1>Porfavor complete con sus datos:</h1>
      <CheckoutFormulario onCheck={crearOrdenCheckout}/>
    </div>
  )
}

export default TerminarCompra