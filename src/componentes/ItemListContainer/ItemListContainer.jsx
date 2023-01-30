import React, {useState, useEffect} from 'react';
import"./ItemListContainer.css";
import { cargarItems , cargarCategoria} from '../../services/firebase';
import ItemList from './ItemList';
import {useParams} from "react-router-dom"
import Hero from '../Hero/Hero';
import Loader from '../Loader/Loader';

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
    {categoriaID ? <></> : <Hero/>}
    <div className="tituloProductos">
      <h2>Nuestros Productos</h2>
    </div>
    {isLoading ? <Loader/> : <ItemList productos={productos}/>}
    </>
  )
}

export default ItemListContainer