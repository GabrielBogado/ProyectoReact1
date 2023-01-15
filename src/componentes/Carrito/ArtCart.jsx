import React, { useContext } from 'react'
import { cartContexto } from '../../Storage/ContextCart'
import "./artCart.css"

function ArtCart(props) {
const {eliminarItem, eliminarUnidad} = useContext(cartContexto)

  return (
    <div className='artCartContainer'>
        <div className="contenedorImgCart">
            <img src={props.img} title={props.nombre} alt={props.nombre} />
        </div>
        <div className="contenedorDetalleCart">
            <h2>{props.nombre}</h2>
            <h4>Precio por unidad: ${props.precio}</h4>
            <p>Agregados al carrito: {props.count}</p>
            <h3>Sub-Total: ${props.count * props.precio}</h3>
        </div>
        <div className="eliminarProductos">
          <button onClick={()=>eliminarItem(props.id)}>Eliminar producto</button>
          <button onClick={()=>eliminarUnidad(props.id)}>Eliminar unidad</button>
        </div>

    </div>
  )
}

export default ArtCart