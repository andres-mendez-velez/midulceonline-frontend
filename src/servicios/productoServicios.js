import axios from "axios";

const productoServicios = {};
const URL = "http://localhost:8000/api/productos";

productoServicios.obtenerProductos = () => {
    return axios.get(URL);
};

productoServicios.buscarProductoPorCriterio = (criterio) => {
    return axios.get(URL + "?q=" + criterio);
};

productoServicios.buscarProductosDisponibles = () => {
    return axios.get(URL + "?disponible=true");
};

productoServicios.buscarEntreDisponibles = (criterio) => {
    return axios.get(URL + "?q=" + criterio + "&disponible=true");
};

productoServicios.cargarProducto = (id) => {
    return axios.get(URL + "/" + id);
};

productoServicios.guardarProducto = (producto) => {
    return axios.post(URL, producto);
};

productoServicios.modificarProducto = (id, producto) => {
    return axios.put(URL + "/" + id, producto);
};

productoServicios.eliminarProducto = (id) => {
    return axios.delete(URL + "/" + id);
};

export default productoServicios;