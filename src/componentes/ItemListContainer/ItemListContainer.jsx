import React, {useState, useEffect} from 'react';
import"./ItemListContainer.css";
/* import Hero from "../Hero/Hero" */
import cargarItems, {cargarCategoria} from '../../services/mockServices';
import ItemList from './ItemList';
import {useParams} from "react-router-dom"
/* import productos from '../../dataBase/productos'; */

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  let categoriaID = useParams().categoriaID
  
  useEffect(()=>{

    if(categoriaID){
      cargarCategoria(categoriaID).then((respuestaCategoria)=> setProductos(respuestaCategoria))
    }
    else{
      cargarItems()
      .then(respuesta => setProductos(respuesta))
      .catch((error)=> console.error(error))

    }


  }, [categoriaID])

  return (
    <>
    {/* <Hero></Hero> */}
    <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer