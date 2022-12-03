import productos from "../dataBase/productos";

function cargarItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 3000);
    reject("Error en carga de Productos");
  });
}

export default cargarItems;
