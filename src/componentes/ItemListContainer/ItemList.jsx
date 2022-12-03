import React from 'react'
import Item from './Item'

function ItemList(props) {
    return (
        <div className="contenedorCards">
        {props.productos.map( producto =>{
            return <Item  img={producto.imagen}
                          key={producto.id}
                          nombre={producto.nombre}
                          precio={producto.precio}
                          tipo={producto.tipo}/>
          })}
        </div>
    )
}

export default ItemList