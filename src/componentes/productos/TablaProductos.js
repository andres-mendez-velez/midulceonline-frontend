import productoServicios from "../../servicios/productoServicios"
import Estados from "../../enums/Estados";
import { useState, useEffect } from "react";

const TablaProductos = () => {

  const [listaProductos, setListaProductos] = useState([]);
  const [estado, setEstado] = useState(Estados.CARGANDO);
  const [criterio, setCriterio] = useState("");
  const [idBorrar, setIdBorrar] = useState("");
  const [productoBorrar, setProductoBorrar] = useState("");

  const cargarData = async () => {
    try {
      const respuesta = await productoServicios.obtenerProductos();
      if (respuesta.data.length > 0) {
        setListaProductos(respuesta.data);
        setEstado(Estados.OK);
      }
      else {
        setEstado(Estados.VACIO);
      }
    } catch (error) {
      setEstado(Estados.ERROR);
    }
  };

  useEffect(() => {
    cargarData();
  }, []);

  const cambiarCriterio = (event) => {
    setCriterio(event.target.value);
  };

  const buscarProducto = async (event) => {
    event.preventDefault();
    try {
      const respuesta = await productoServicios.buscarProductoPorCriterio(criterio);
      if (respuesta.data.length > 0) {
        setListaProductos(respuesta.data);
        setEstado(Estados.OK);
      }
      else {
        setEstado(Estados.VACIO);
      }
    } catch (error) {
      setEstado(Estados.ERROR);
    }
  };

  const confirmarBorrado = (id, nombre) => {
    setIdBorrar(id);
    setProductoBorrar(nombre);
  };

  const borrarProducto = async () => {
    await productoServicios.eliminarProducto(idBorrar);
    cargarData();
  };

  return (
    <div className="ms-5 me-5 position-relative">
      <h4 className="mb-4"><i className="bi bi-bag-heart me-2"/>Productos</h4>
      <div className="position-absolute top-0 end-0">
        <a href="/productos/form" className="btn btn-primary btn-sm ms-5" title="Agregar nuevo producto"><b>Agregar producto</b></a>
      </div>
      <div className="input-group input-group-sm mb-3">
        <input onChange={cambiarCriterio} value={criterio} type="text" className="form-control" placeholder="Buscar" aria-label="Busqueda con filtro"
          aria-describedby="buscar" />
        <button onClick={buscarProducto} className="btn btn-primary" type="button" id="buscar"><i className="bi bi-search ms-4 me-4"></i></button>
      </div>
      <table className="table table-sm table-bordered align-middle">
        <thead>
          <tr className="table-dark">
            <th>Nombre</th>
            <th>Marca</th>
            <th>Presentación</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Keywords</th>
            <th>Disponible</th>
            <th>Categoría</th>
            <th>Imágenes</th>
            <th className="text-center">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            estado === Estados.CARGANDO ?
              (
                <tr>
                  <td align="center" colSpan="10">
                    <div className="spinner-grow text-primary me-2" role="status">
                      <span className="visually-hidden">Cargando...</span>
                    </div>
                  </td>
                </tr>
              ) :
              estado === Estados.ERROR ?
                (
                  <tr>
                    <td align="center" colSpan="10">
                      Error. Por favor intente más tarde.
                    </td>
                  </tr>
                ) :
                estado === Estados.VACIO ?
                  (
                    <tr>
                      <td align="center" colSpan="10">
                        No se encontraron datos.
                      </td>
                    </tr>
                  ) :
                  (
                    listaProductos.map((producto) => (
                      <tr key={producto._id}>
                        <td>{producto.nombre}</td>
                        <td>{producto.marca}</td>
                        <td>{producto.presentacion}</td>
                        <td>{producto.cantidad}</td>
                        <td>{"$ " + producto.precio}</td>
                        <td>
                          {producto.keywords.map(elemento => {
                            return <div key={`elemento_${elemento}`}>
                              {elemento}<br />
                            </div>
                          })}
                        </td>
                        <td>{producto.disponible ? "Sí" : "No"}</td>
                        <td>{producto.categoria}</td>
                        <td>
                          {producto.imagenes.map(elemento2 => {
                            return <div key={`elemento2_${elemento2}`}>
                              {elemento2}<br />
                            </div>
                          })}
                        </td>
                        <td className="text-center">
                          <div className="btn-group" role="group" aria-label="Acciones">
                            <a title="Editar" href={"/productos/form/" + producto._id} type="button"
                              className="btn btn-outline-primary btn-sm"><i className="bi bi-pencil"></i>
                            </a>
                            <button title="Eliminar" onClick={() => confirmarBorrado(producto._id, producto.nombre)} type="button"
                              className="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#modalBorrar">
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )
          }
        </tbody>
      </table>

      <div className="modal fade" id="modalBorrar" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="staticBackdropLabel"><i className="bi bi-exclamation-octagon-fill me-3"></i>Alerta de eliminación</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ¿Está seguro de que desea eliminar el producto {productoBorrar}?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" onClick={borrarProducto} className="btn btn-danger" data-bs-dismiss="modal">Eliminar</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TablaProductos;