import React from 'react'
import { useState } from 'react'
import InputForm from '../InputForm/InputForm'
import "./checkout.css"

function CheckoutFormulario({onCheck}) {
    const [datoComprador, setDatoComprador] = useState({
        nombre:"",
        email:"",
        telefono:""
    })

    function cargarInput(evt){
        let nombreInput = evt.target.name
        let value = evt.target.value

        const newDatoComprador = {...datoComprador}
        newDatoComprador[nombreInput] = value
        setDatoComprador(newDatoComprador)
    }

    function onGenerador(evt){
        evt.preventDefault()
        setDatoComprador({
            nombre:"",
            email:"",
            telefono:""
        })
        onCheck(datoComprador)
    }
    return (
    <div className='contenedorCheck'>
    <div className='contenedorForm'>
        <form>
        <InputForm
            value={datoComprador.nombre}
            name="nombre"
            title="Nombre"
            onChange={cargarInput}/>
        <InputForm
            value={datoComprador.email}
            name="email"
            title="Email"
            onChange={cargarInput}/>
        <InputForm
            value={datoComprador.telefono}
            name="telefono"
            title="Telefono"
            onChange={cargarInput}/>
        </form>
    </div>
    <div className="contenedorGenerar">
        <button onClick={onGenerador}>Generar orden</button>
    </div>
    </div>
    )
}

export default CheckoutFormulario