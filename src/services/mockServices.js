import productos from "../dataBase/productos";

function cargarItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 3000);
  });
}

export default cargarItems;
