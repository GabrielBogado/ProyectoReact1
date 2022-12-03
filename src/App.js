import "./App.css";
import NavBar from "./componentes/Header/NavBar";
import Hero from "./componentes/Hero/Hero";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Hero/>
        <ItemListContainer />
      </main>
    </div>
  );
}

export default App;
