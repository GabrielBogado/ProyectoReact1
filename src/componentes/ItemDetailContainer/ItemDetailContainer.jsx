import React, {useState, useEffect} from 'react'
import {cargarUnicoItem} from '../../services/mockServices'
import ItemDetail from '../ItemDetailContainer/ItemDetail'
import {useParams} from "react-router-dom"

function ItemDetailContainer() {
    const [producto, setProducto]= useState([])
    let idProducto = useParams().idProducto

    useEffect(()=>{
        cargarUnicoItem(idProducto).then((respueta)=>{setProducto(respueta)}).catch((error)=> console.error(error))
    }, [idProducto])

  return (
    <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer