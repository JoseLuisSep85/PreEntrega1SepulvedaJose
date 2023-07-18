import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<p>Hola soy el Inicio</p>}/>
        <Route path="/categoria/SmartPhones" element={<p>Hola la categoria SmartPhones</p>}/>
        <Route path="/categoria/Notebooks" element={<p>Hola la categoria Notebooks</p>}/>
        <Route path="/categoria/Videojuegos" element={<p>Hola la categoria Videojuegos</p>}/>
      </Routes>
      <ItemListContainer greeting={'Bienvenidos a TecnoPlay'}/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
