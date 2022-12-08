import "./App.css";
import NavBar from "./componentes/Header/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/inicio" element={<ItemListContainer />} />
            <Route path="/item/:idProducto" element={<ItemDetailContainer />} />
            <Route
              path="*"
              element={<h1>Error, no se pudo encontrar el recurso</h1>}
            />
            <Route
              path="/categoria/:categoriaID"
              element={<ItemListContainer />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
