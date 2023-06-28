import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (

    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos a TecnoPlay'}/>
      <Footer/>
    </div>
  );
}

export default App;
