import React from 'react'
import "../BotonesCarrito/checkout.css"

function InputForm(props) {
    return (
        <div className='contenedorInput'>
            <label placeholder={props.holder} className='label'>{props.title}</label>
            <input 
            required
            type={props.type}
            placeholder={props.holder}
            name={props.name} 
            value={props.value}
            onChange={props.onChange}
            />
        </div>
    )
}

export default InputForm