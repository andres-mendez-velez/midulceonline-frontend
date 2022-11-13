import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import estados from "../../enums/Estados";
import productoServicios from "../../servicios/productoServicios";
import CardProducto from "./CardProducto";

function MostradorProductos() {
  const query = useLocation();

  const [estado, setEstado] = useState(estados.OK);
  const [productos, setProductos] = useState([]);
  const [criterio, setCriterio] = useState("");

  async function cargarProductos(categoria = "") {
    setEstado(estados.CARGANDO);
    try {
      let resultado;
      if (criterio !== "") {
        resultado = await productoServicios.buscarEntreDisponibles(criterio);
      } else if (categoria !== "") {
        resultado = await productoServicios.buscarEntreDisponibles(categoria);
      } else {
        resultado = await productoServicios.buscarProductosDisponibles();
      }
      if (resultado.data.length === 0) {
        setEstado(estados.VACIO);
      } else {
        setProductos(resultado.data);
        setEstado(estados.OK);
      }
    } catch (error) {
      setEstado(estados.ERROR);
    }
  }

  function cambiarCriterio(event) {
    setCriterio(event.target.value);
  }

  function buscarProductos(event) {
    event.preventDefault();
    cargarProductos();
  }

  useEffect(() => {
    const categoria = query.search.replace("?q=", "");
    cargarProductos(categoria);
  }, []);

  return (
      <div id="catalogo" className="container">
        <div className="input-group mb-3 mt-3">
          <input type="text" className="form-control" id="buscar" value={criterio} onChange={cambiarCriterio}
            placeholder="Buscar productos" aria-label="Buscar" aria-describedby="buscar" />
          <button className="btn btn-primary" type="button" onClick={buscarProductos}>
            <i className="bi bi-search ms-4 me-4" />
          </button>
        </div>
        <div className="row mb-2">
          {
            estado === estados.CARGANDO ? (<div>Cargando...</div>)
              :
              estado === estados.VACIO ? (<div>No hay datos</div>)
                :
                productos.map((producto) => (
                  (<CardProducto key={producto._id} producto={producto} />)
                ))
          }
        </div>
      </div>
  )
}

export default MostradorProductos;