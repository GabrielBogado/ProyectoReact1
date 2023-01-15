import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom'
import "./ContadorItems.css"

function ContadorItems({onAddToCart, stock}) {
  let fijo
  let navigateTo = useNavigate()
  if(stock>0){
    fijo = 1
  }
  
  else {fijo = 0}
  const [contador, setContador] = useState(fijo)
  
  function contadorSuma(){
    if(contador < stock)
    setContador(contador + 1)
}

function contadorResta(){
    setContador(contador - 1)
}


  return (
    <div className="contenedorDuo">
      {fijo === 0?
      <>
      <p className='sinStock'>Sin Stock</p>
      <button className='bVolver' onClick={()=> navigateTo("/")}>Volver</button></> :
      <>
      <div className="contenedorContador">
        <button className="bContador" onClick={contadorResta} disabled={contador === fijo}>-</button>
        <h3>{contador}</h3>
        <button className="bContador" onClick={contadorSuma}>+</button>
      </div>
      <div className="contenedorBotonCompra">
        <button onClick={()=>onAddToCart(contador)} className="botonCompra" title="Agregar al carrito">Agregar al Carrito</button>
      </div></>}
    
    </div>
  )
}

export default ContadorItems