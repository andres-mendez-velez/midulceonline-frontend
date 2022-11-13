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
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Categorías</h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {
          estado === estados.CARGANDO ? (<div>Cargando...</div>)
            :
            estado === estados.VACIO ? (<div>No hay datos</div>)
              :
              (

                categorias.map((categoria) =>
                (
                  <div className="col">
                    <a key={categoria._id} href={"/productos/cliente/?q=" + categoria.nombre} style={{textDecoration: "none"}}>
                      <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                      <img className="h-100" src={publicImgsURL + categoria.imagen} alt={"Imagen de categoria " + categoria.nombre} />
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                          <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{categoria.nombre}</h3>
                          <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto">
                              {categoria.descripcion}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </div>
                )
                )
              )
        }
      </div>
    </div>
  )
}

export default MostradorCategorias;