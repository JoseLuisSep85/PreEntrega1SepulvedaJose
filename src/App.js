import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path = "/" element = {<ItemListContainer greeting={'Bienvenidos a TecnoPlay'}/>}/>
          <Route path = "/categoria/:categoriaId" element = {<ItemListContainer/>}/>
          <Route path = "/item/:itemId" element = {<ItemDetailContainer/>}/>
          <Route path = "*" element = {<h1>404 NOT FOUND</h1>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
          
  );
}

export default App;
