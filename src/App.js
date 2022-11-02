import Header from "./componentes/general/Header";
import Banner from "./componentes/general/Banner";
import TablaCategorias from "./componentes/categorias/TablaCategorias";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Banner/>} exact/>
        <Route path="/categorias" element={<TablaCategorias/>} exact/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;