import React, {useState, useEffect} from 'react';
import"./ItemListContainer.css";
import cargarItems from '../../services/mockServices';
import ItemList from './ItemList';
/* import productos from '../../dataBase/productos'; */

function ItemListContainer() {
  const [productos, setProductos] = useState([])

  
  useEffect(()=>{
    cargarItems().then(respuesta => setProductos(respuesta)).catch((errorMensaje) =>{console.log("Error:", errorMensaje)})
  }, [])

  return (
    <ItemList productos={productos}/>
  )
}

export default ItemListContainer