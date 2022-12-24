import React, {useState} from 'react'
import "./ContadorItems.css"

function ContadorItems({onAddToCart, stock}) {
const [contador, setContador] = useState(1)

function contadorSuma(){
  if(contador < stock)
    setContador(contador + 1)
}

function contadorResta(){
    setContador(contador - 1)
}


  return (
    <div className="contenedorDuo">
    <div className="contenedorContador">
        <button onClick={contadorResta} disabled={contador === 1}>-</button>
        <h3>{contador}</h3>
        <button onClick={contadorSuma}>+</button>
    </div>
    <div className="contenedorBotonCompra">
        <button onClick={()=>onAddToCart(contador)} className="botonCompra" title="Agregar al carrito">Agregar al Carrito</button>
    </div>
    </div>
  )
}

export default ContadorItems