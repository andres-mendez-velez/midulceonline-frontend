import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/general/Header";
import Banner from "./componentes/general/Banner";
import TablaCategorias from "./componentes/categorias/TablaCategorias";
import FormCategorias from "./componentes/categorias/FormCategorias";
import TablaProductos from "./componentes/productos/TablaProductos";
import FormProductos from "./componentes/productos/FormProductos";

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Banner/>} exact/>
        <Route path="/categorias" element={<TablaCategorias/>} exact/>
        <Route path="/categorias/form" element={<FormCategorias/>} exact/>
        <Route path="/categorias/form/:id" element={<FormCategorias/>} exact/>
        <Route path="/productos" element={<TablaProductos/>} exact/>
        <Route path="/productos/form" element={<FormProductos/>} exact/>
        <Route path="/productos/form/:id" element={<FormProductos/>} exact/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;