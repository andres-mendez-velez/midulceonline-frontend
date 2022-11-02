import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/general/Header";
import Banner from "./componentes/general/Banner";
import TablaCategorias from "./componentes/categorias/TablaCategorias";
import FormCategorias from "./componentes/categorias/FormCategorias";

//import Variables from "./componentes/categorias/Variables";

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Banner/>} exact/>
        <Route path="/categorias" element={<TablaCategorias/>} exact/>
        <Route path="/categorias/form" element={<FormCategorias/>} exact/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;