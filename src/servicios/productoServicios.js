import axios from "axios";

const productoServicios = {};

productoServicios.obtenerProductos = () => {
    return axios.get("http://localhost:8000/api/productos");
};

productoServicios.buscarProductoPorCriterio = (criterio) => {
    return axios.get("http://localhost:8000/api/productos?q=" + criterio);
};

productoServicios.cargarProducto = (id) => {
    return axios.get("http://localhost:8000/api/productos/" + id);
};

productoServicios.guardarProducto = (producto) => {
    return axios.post("http://localhost:8000/api/productos", producto);
};

productoServicios.modificarProducto = (id, producto) => {
    return axios.put("http://localhost:8000/api/productos/" + id, producto);
};

productoServicios.eliminarProducto = (id) => {
    return axios.delete("http://localhost:8000/api/productos/" + id);
};

export default productoServicios;