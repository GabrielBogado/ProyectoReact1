import productos from "../dataBase/productos";

function cargarItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
}

export function cargarCategoria(categoriaID){
  return new Promise((resolve, reject) =>{
      let itemsCategoria = productos.filter(item =>{
        return(item.categoria === categoriaID)
      }) 
      resolve(itemsCategoria)
  })
}

export function cargarUnicoItem(idProducto) {
  let urlID = idProducto;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let itemSeleccionado = productos.find(
        (itemProducto) => itemProducto.id === parseInt(urlID)
      );
      if (itemSeleccionado) resolve(itemSeleccionado);
      else reject("Item no encontrado");
    }, 500);
  });
}
export default cargarItems;
