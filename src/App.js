import Header from "./general/Header";
import Banner from "./general/Banner";
import TablaCategorias from "./categorias/TablaCategorias";
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