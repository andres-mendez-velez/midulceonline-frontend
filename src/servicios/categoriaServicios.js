import axios from "axios";

const categoriaServicios = {};
const URL = "http://localhost:8000/api/categorias";

categoriaServicios.obtenerCategorias = () => {
    return axios.get(URL);
};

categoriaServicios.obtenerDisponibles = () => {
    return axios.get(URL + "?disponible=true");
};

categoriaServicios.buscarCategoriaPorCriterio = (criterio) => {
    return axios.get(URL + "?q=" + criterio);
};

categoriaServicios.cargarCategoria = (id) => {
    return axios.get(URL + "/" + id);
};

categoriaServicios.guardarCategoria = (categoria) => {
    return axios.post(URL + "", categoria);
};

categoriaServicios.modificarCategoria = (id, categoria) => {
    return axios.put(URL + "/" + id, categoria);
};

categoriaServicios.eliminarCategoria = (id) => {
    return axios.delete(URL + "/" + id);
};

export default categoriaServicios;