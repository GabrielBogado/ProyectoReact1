import "./App.css";
import NavBar from "./componentes/Header/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./Storage/ContextCart";
import Cart from "./componentes/Carrito/Cart";
import TerminarCompra from "./componentes/BotonesCarrito/TerminarCompra";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/item/:idProducto"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<Cart />}></Route>
              <Route
                path="*"
                element={<h1>Error, no se pudo encontrar el recurso</h1>}
              />
              <Route
                path="/categoria/:categoriaID"
                element={<ItemListContainer />}
              />
              <Route path="/checkout" element={<TerminarCompra />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
