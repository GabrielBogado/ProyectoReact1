import React, {useState} from 'react'
import "./ContadorItems.css"

function ContadorItems() {
const [contador, setContador] = useState(0)

function contadorSuma(){
  if(contador < props.stock)
    setContador(contador + 1)
}

function contadorResta(){
    setContador(contador - 1)
}

function agregarCarrito(){
  console.log("Se agrego a carrito")
}

  return (
    <div className="contenedorDuo">
    <div className="contenedorContador">
        <button onClick={contadorResta} disabled={contador === 1}>-</button>
        <h3>{contador}</h3>
        <button onClick={contadorSuma}>+</button>
    </div>
    <div className="contenedorBotonCompra">
        <button onClick={agregarCarrito} className="botonCompra" title="Agregar al carrito">Agregar al Carrito</button>
    </div>
    </div>
  )
}

export default ContadorItems