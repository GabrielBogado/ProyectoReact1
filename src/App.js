import "./App.css";
import NavBar from "./componentes/Header/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <ItemListContainer />
      </main>
    </div>
  );
}

export default App;
