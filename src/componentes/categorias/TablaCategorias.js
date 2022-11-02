import categoriaServicios from "../../servicios/categoriaServicios";
import Estados from "../../enums/Estados";

const TablaCategorias = () => {

    let listaCategorias; // Const no permite declarar y aparte, inicializar
    let estado;

    const cargarData = async () => {
        listaCategorias = await categoriaServicios.obtenerCategorias();
        console.log(listaCategorias);
        if (listaCategorias.length === 0) {
            estado = Estados.VACIO;
        }
        else {
            estado = Estados.OK;
        }
    };
    cargarData();

    return (
        <div className="ms-5 me-5">
            <h4 className="mb-4">Lista de categorías
                <a href="/categorias/form" className="btn btn-primary btn-sm ms-3" title="Agregar nueva categoría">+</a>
            </h4>
            <table className="table table-sm">
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
                        (estado === Estados.CARGANDO) ?
                            (
                                <tr>
                                    <td align="center" colSpan="5">
                                        <div className="spinner-grow text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </td>
                                </tr>
                            ) :
                            (estado === Estados.VACIO) ?
                                (
                                    <tr>
                                        <td align="center" colSpan="5">
                                            No hay datos
                                        </td>
                                    </tr>
                                ) :
                                (
                                    listaCategorias.map((categoria) => (
                                        <tr>
                                            <td>{categoria.nombre}</td>
                                            <td>{categoria.disponible ? "Sí" : "No"}</td>
                                            <td>{categoria.descripcion}</td>
                                            <td>
                                                <img src={categoria.imagen} height="30" width="60" alt="Imágen de la categoría" />
                                            </td>
                                            <td>
                                                <div className="btn-group" role="group" aria-label="Acciones">
                                                    <button type="button" className="btn btn-secondary btn-sm">Editar</button>
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