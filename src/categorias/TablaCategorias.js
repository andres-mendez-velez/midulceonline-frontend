const TablaCategorias = () => {
    return(
        <table className="table table-sm container">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Disponible</th>
                    <th>Imágen</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Repostería</td>
                    <td>Sí</td>
                    <td>reposteria.jpg</td>
                </tr>
                <tr>
                    <td>Confitería</td>
                    <td>No</td>
                    <td>confiteria.jpg</td>
                </tr>
                <tr>
                    <td>Chocolateria</td>
                    <td>Sí</td>
                    <td>chocolate.jpg</td>
                </tr>
            </tbody>
        </table>
    )
};

export default TablaCategorias;