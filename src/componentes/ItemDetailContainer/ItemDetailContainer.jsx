import React, {useState, useEffect} from 'react'
import {cargarUnicoItem} from '../../services/firebase'
import ItemDetail from '../ItemDetailContainer/ItemDetail'
import {useParams} from "react-router-dom"

function ItemDetailContainer() {
    const [producto, setProducto]= useState([])
    const [isLoading, setIsLoading] = useState(true)
    let idProducto = useParams().idProducto

    useEffect(()=>{
        cargarUnicoItem(idProducto).then((respueta)=>{setProducto(respueta); setIsLoading(false)}).catch((error)=> 
        console.error(error))
    }, [idProducto])

  return (
    <>
    {isLoading ? <h3>CARGANDO . . . </h3> : <ItemDetail producto={producto}/>}
    </>
  )
}

export default ItemDetailContainer