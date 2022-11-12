import { useEffect, useState } from "react";
import estados from "../../enums/Estados";
import categoriaServicios from "../../servicios/categoriaServicios";

const publicImgsURL = process.env.PUBLIC_URL + "/imgs/categorias/";

function MostradorCategorias() {
  const [estado, setEstado] = useState(estados.CARGANDO);
  const [categorias, setCategorias] = useState([]);

  async function cargarCategorias() {
    setEstado(estados.CARGANDO);
    try {
      const resultado = await categoriaServicios.obtenerDisponibles();
      if (resultado.data.length === 0) {
        setEstado(estados.VACIO);
      } else {
        setCategorias(resultado.data);
        setEstado(estados.OK);
      }
    } catch (error) {
      setEstado(estados.ERROR);
      console.log(error);
    }
  }

  useEffect(() => {
    cargarCategorias();
  }, []);

  return (
    <main id="catalogo" className="container-fluid">
      <div className="row mb-2">
        {
          estado === estados.CARGANDO ? (<div>Cargando...</div>)
            :
            estado === estados.VACIO ? (<div>No hay datos</div>)
              :
              categorias.map((categoria) => (
                <div className="col-2">
                  <a key={categoria._id} href={"/productos/cliente/?q=" + categoria.nombre} >
                    <img src={publicImgsURL + categoria.imagen} alt={"Imagen de categoria" + categoria.nombre} width="100%" />
                  </a>
                </div>
              ))
        }
      </div>
    </main>
  )
}

export default MostradorCategorias;