import React, {useState, useEffect} from 'react';
import"./ItemListContainer.css";
/* import Hero from "../Hero/Hero" */
import { cargarItems , cargarCategoria} from '../../services/firebase';
import ItemList from './ItemList';
import {useParams} from "react-router-dom"

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  let categoriaID = useParams().categoriaID
  
  useEffect(()=>{

    if(categoriaID){
      cargarCategoria(categoriaID).then((respuestaCategoria)=> { setProductos(respuestaCategoria); setIsLoading(false)})
    }
    else{
      cargarItems()
      .then(respuesta => {setProductos(respuesta); setIsLoading(false)})
      .catch((error)=> console.error(error))

    }


  }, [categoriaID])

  return (
    <>
    {isLoading ? <h3>CARGANDO . . . </h3> : <ItemList productos={productos}/>}
    </>
  )
}

export default ItemListContainer