import Footer from "./components/Footer";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (

    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos a TecnoPlay'}/>
      <ItemCount initial={1} stock={10} onAdd={(cantidad) => console.log('Cantidad agregada', cantidad)}/>
      <Footer/>
    </div>
  );
}

export default App;
