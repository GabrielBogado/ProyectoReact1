import React, {useState} from 'react'
import "./ToogleBoton.css"

function Toogle() {
const [esFavorito, setEsFavorito] = useState(false)

function agregarFavorito(){
  if(esFavorito){
    setEsFavorito(false)
  }
  else{
    setEsFavorito(true)
  }
}

  return (
    <button onClick={agregarFavorito} className={esFavorito ? "favBase favAgregado" : "favBase"}>🤍</button>
  )
}

export default Toogle