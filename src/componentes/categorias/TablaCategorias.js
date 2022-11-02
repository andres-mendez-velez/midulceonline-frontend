import categoriaServicios from "../../servicios/categoriaServicios";

const TablaCategorias = () => {
    const listaCategorias = categoriaServicios.obtenerCategorias();
    return (
        <div className="ms-4 me-5">
            <h4 className="mb-4">Lista de categorías
                <a href="/categorias/form" class="btn btn-primary btn-sm ms-3">+</a>
            </h4>
            <table className="table table-sm">
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
                                    <img src={categoria.imagen} height="30" width="60" />
                                </td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Acciones">
                                        <button type="button" class="btn btn-secondary btn-sm">Editar</button>
                                        <button type="button" class="btn btn-danger btn-sm">Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TablaCategorias;