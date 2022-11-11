import { BrowserRouter, Routes, Route } from "react-router-dom";
import TablaCategorias from "./componentes/categorias/TablaCategorias";
import FormCategorias from "./componentes/categorias/FormCategorias";
import TablaProductos from "./componentes/productos/TablaProductos";
import FormProductos from "./componentes/productos/FormProductos";
import FormRegistro from "./componentes/usuarios/FormRegistro";
import FormIngreso from "./componentes/general/FormIngreso";
import Header from "./componentes/general/Header";
import Banner from "./componentes/general/Banner";
import { useState } from "react";
import { ContextoUsuario } from "./componentes/usuarios/ContextoUsuario";
import Gestor from "./componentes/usuarios/Gestor";

function App() {
  const [usuario, setUsuario] = useState({ nombres: "", estadologin: 0 });

  return (
    <div>
      <BrowserRouter>
        <ContextoUsuario.Provider value={{ usuario, setUsuario }}>
          <Header />
          <Routes>
            <Route path="/" element={<Banner />} exact/>
            <Route path="/gestor" element={<Gestor />} exact />

            <Route path="/login/form" element={<FormIngreso />} />
            <Route path="/usuarios/form" element={<FormRegistro />} exact />

            <Route path="/categorias" element={<TablaCategorias />} exact />
            <Route path="/categorias/form" element={<FormCategorias />} exact />
            <Route path="/categorias/form/:id" element={<FormCategorias />} exact />

            <Route path="/productos" element={<TablaProductos />} exact />
            <Route path="/productos/form" element={<FormProductos />} exact />
            <Route path="/productos/form/:id" element={<FormProductos />} exact />
          </Routes>
        </ContextoUsuario.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;