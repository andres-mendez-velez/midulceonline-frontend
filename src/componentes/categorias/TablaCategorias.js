import categoriaServicios from "../../servicios/categoriaServicios";
import Estados from "../../enums/Estados";
import { useState, useEffect } from "react";

const TablaCategorias = () => {

    const [listaCategorias, setListaCategorias] = useState([]);
    const [estado, setEstado] = useState(Estados.CARGANDO);
    const [criterio, setCriterio] = useState("");

    useEffect(() => {
        const cargarData = async () => {
            try {
                const respuesta = await categoriaServicios.obtenerCategorias();
                if (respuesta.data.length > 0) {
                    setListaCategorias(respuesta.data);
                    setEstado(Estados.OK);
                }
                else {
                    setEstado(Estados.VACIO);
                }
            } catch (error) {
                setEstado(Estados.ERROR);
            }
        };
        cargarData();
    }, []);

    const cambiarCriterio = (event) => {
        setCriterio(event.target.value);
    };

    const buscarCategoria = async(event) => {
        event.preventDefault();
        try {
            const respuesta = await categoriaServicios.buscarCategoriaPorCriterio(criterio);
            if (respuesta.data.length > 0) {
                setListaCategorias(respuesta.data);
                setEstado(Estados.OK);
            }
            else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR);
        }
    };

    return (
        <div className="ms-5 me-5">
            <h4 className="mb-4">Lista de categorías
                <a href="/categorias/form" className="btn btn-primary btn-sm ms-3" title="Agregar nueva categoría">+</a>
            </h4>
            <div className="input-group mb-3 w-25">
                <input onChange={cambiarCriterio} value={criterio} type="text" className="form-control" placeholder="Ingrese aquí su búsqueda" aria-label="Busqueda con filtro" 
                aria-describedby="buscar"/>
                <button onClick={buscarCategoria} className="btn btn-outline-primary" type="button" id="buscar">Buscar</button>
            </div>
            <table className="table table-sm table-bordered align-middle">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Disponible</th>
                        <th>Descripción</th>
                        <th>Imágen</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        estado === Estados.CARGANDO ?
                            (
                                <tr>
                                    <td align="center" colSpan="5">
                                        <div className="spinner-grow text-primary me-2" role="status">
                                            <span className="visually-hidden">Cargando...</span>
                                        </div>
                                    </td>
                                </tr>
                            ) :
                            estado === Estados.ERROR ?
                                (
                                    <tr>
                                        <td align="center" colSpan="5">
                                            Error. Por favor intente más tarde.
                                        </td>
                                    </tr>
                                ) :
                                estado === Estados.VACIO ?
                                    (
                                        <tr>
                                            <td align="center" colSpan="5">
                                                No se encontraron datos.
                                            </td>
                                        </tr>
                                    ) :
                                    (
                                        listaCategorias.map((categoria) => (
                                            <tr key={categoria._id}>
                                                <td>{categoria.nombre}</td>
                                                <td>{categoria.disponible ? "Sí" : "No"}</td>
                                                <td>{categoria.descripcion}</td>
                                                <td>{categoria.imagen}</td>
                                                <td>
                                                    <div className="btn-group" role="group" aria-label="Acciones">
                                                        <a href={"/categorias/form/" + categoria._id} type="button" className="btn btn-primary btn-sm">Editar</a>
                                                        <button type="button" className="btn btn-danger btn-sm">Eliminar</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TablaCategorias;