import React, {useState, useEffect} from 'react';
import"./ItemListContainer.css";
/* import Hero from "../Hero/Hero" */
import cargarItems, {cargarCategoria} from '../../services/mockServices';
import ItemList from './ItemList';
import {useParams} from "react-router-dom"
/* import productos from '../../dataBase/productos'; */

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