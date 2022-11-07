import { BrowserRouter, Routes, Route } from "react-router-dom";
import TablaCategorias from "./componentes/categorias/TablaCategorias";
import FormCategorias from "./componentes/categorias/FormCategorias";
import TablaProductos from "./componentes/productos/TablaProductos";
import FormProductos from "./componentes/productos/FormProductos";
import Main from "./componentes/contenedora/Main";
import FormRegistro from "./componentes/categorias/FormRegistro";
import Ingreso from "./componentes/general/Ingreso";
import Pedidos from "./componentes/contenedora/Pedidos";
import MainUsuario from "./componentes/contenedora/MainUsuario";
import CatalogoCompra from "./componentes/contenedora/CatalogoCompra";
import CarritoCompras from "./componentes/contenedora/CarritoCompras";
import EstadoPaquete from "./componentes/contenedora/EstadoPaquete";
import Header from "./componentes/general/Header";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} exact />

          <Route path="/ingresoFormBanner/Form" element={<Ingreso />} exact />
          <Route path="/registroFormBanner/form" element={<FormRegistro />} exact />
          <Route path="/registroForm/form" element={<FormRegistro />} exact />

          <Route path="/categorias" element={<TablaCategorias />} exact />
          <Route path="/categorias/form" element={<FormCategorias />} exact />
          <Route path="/categorias/form/:id" element={<FormCategorias />} exact />

          <Route path="/productos" element={<TablaProductos />} exact />
          <Route path="/productos/form" element={<FormProductos />} exact />
          <Route path="/productos/form/:id" element={<FormProductos />} exact />

          <Route path="/pedidos" element={<Pedidos />} exact />

          <Route path="/invitado" element={<MainUsuario />} exact />

          <Route path="/catalogo" element={<CatalogoCompra />} exact />

          <Route path="/carrito_compras" element={<CarritoCompras />} exact />

          <Route path="/estado_envio" element={<EstadoPaquete />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;