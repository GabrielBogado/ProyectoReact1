import React from 'react'
import "../BotonesCarrito/checkout.css"

function InputForm(props) {
    return (
        <div>
            <label>{props.title}</label>
            <input 
            required
            type="text"
            name={props.name} 
            value={props.value}
            onChange={props.onChange}
            />
        </div>
    )
}

export default InputForm