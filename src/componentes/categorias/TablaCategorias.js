import categoriaServicios from "../../servicios/categoriaServicios";

const TablaCategorias = () => {
    const listaCategorias = categoriaServicios.obtenerCategorias();
    return (
        <table className="table table-sm container">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Disponible</th>
                    <th>Imágen</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    listaCategorias.map((categoria) => (
                        <tr>
                            <td>{categoria.nombre}</td>
                            <td>{categoria.disponible ? "Sí" : "No"}</td>
                            <td>
                                <img src={categoria.imagen} height="40" width="70"/>
                            </td>
                            <td>
                                <button type="button" class="btn btn-secondary me-1">Editar</button>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default TablaCategorias;