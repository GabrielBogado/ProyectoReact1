import { initializeApp } from "firebase/app";
import productos from "../dataBase/productos";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  addDoc,
  writeBatch,
  documentId,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8wRYKat1mhpjdk24uOmAOozcT1AuyuBU",
  authDomain: "veranoff-a04a9.firebaseapp.com",
  projectId: "veranoff-a04a9",
  storageBucket: "veranoff-a04a9.appspot.com",
  messagingSenderId: "1003175284094",
  appId: "1:1003175284094:web:cea64941f2e563f2b1f72f",
};

const app = initializeApp(firebaseConfig);

const BD = getFirestore(app);

export async function cargarUnicoItem(idProducto) {
  const docRef = doc(BD, "productos", idProducto); //guardando la referencia del documento, poniendo de donde buscar, la coleccion y el id que se crea automatico

  const docSnap = await getDoc(docRef); //busco la referencia del documento para acceder a la informacion, se le coloca el await para que se muestre cuando termine de cargar, la funcion tiene que ser async sino no funciona

  let productoItem = docSnap.data(); //accediendo a la informacion del documento con .data()

  productoItem.id = docSnap.id;

  return productoItem;
}

export async function cargarItems() {
  const collectionRef = collection(BD, "productos");

  const docsSnaps = await getDocs(collectionRef);

  let docsArray = docsSnaps.docs;

  const dataDocs = docsArray.map((doc) => {
    let productoItem = doc.data();
    productoItem.id = doc.id;
    return productoItem;
  });
  return dataDocs;
}

export async function cargarCategoria(categoriaID) {
  const categoria = query(
    collection(BD, "productos"),
    where("categoria", "==", categoriaID)
  );

  const querySnap = await getDocs(categoria);
  let categoriaArray = querySnap.docs;

  const dataCategori = categoriaArray.map((cate) => {
    return { ...cate.data(), id: cate.id };
  });

  return dataCategori;
}

export async function cargaDeProductosFirebase() {
  const collectionRef = collection(BD, "productos");
  for (let producto of productos) {
    let nuevoProducto = await addDoc(collectionRef, producto);
    console.log(nuevoProducto.id);
  }
}

export async function crearOrden(orden) {
  const collectionRef = collection(BD, "orden");
  const collectionProductosRef = collection(BD, "productos");
  let batch = writeBatch(BD);
  let arrayIds = orden.productosComprados.map((itemEnCart) => itemEnCart.id);
  const q = query(collectionProductosRef, where(documentId(), "in", arrayIds));
  let snapShots = await getDocs(q);

  snapShots.docs.forEach((doc) => {
    let stockDisponible = doc.data().stock;
    let ItemEnCart = orden.productosComprados.find(
      (item) => item.id === doc.id
    );
    let contadorEnCart = ItemEnCart.cantidadProductos;
    let nombreProducto = ItemEnCart.nombre;

    if (stockDisponible < contadorEnCart)
      throw new Error(`Stock no disponible del articulo: ${nombreProducto}`);
    else batch.update(doc.ref, { stock: stockDisponible - contadorEnCart });
  });
  await batch.commit();
  let nuevaOrden = await addDoc(collectionRef, orden);
  return nuevaOrden.id;
}
