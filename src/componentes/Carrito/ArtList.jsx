import React from 'react'
import ArtCart from './ArtCart'


function ArtList(props) {
  return (
    <div className='contenedorCartList'>
        {props.articulos.map(articulo => {
            return <ArtCart img={articulo.imagen}
                            id={articulo.id}
                            key={articulo.id}
                            nombre={articulo.nombre}
                            tipo={articulo.tipo}
                            precio={articulo.precio}
                            count={articulo.count}
            />
        })}

    </div>
  )
}

export default ArtList