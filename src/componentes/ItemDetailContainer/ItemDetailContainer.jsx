import React, {useState, useEffect} from 'react'
import {cargarUnicoItem} from '../../services/firebase'
import ItemDetail from '../ItemDetailContainer/ItemDetail'
import {useParams} from "react-router-dom"
import Loader from '../Loader/Loader'

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
    {isLoading ? <Loader/> :<><ItemDetail producto={producto}/></>}
    </>
  )
}

export default ItemDetailContainer