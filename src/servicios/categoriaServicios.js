import axios from "axios";

const categoriaServicios = {};

categoriaServicios.obtenerCategorias = () => {
    return axios.get("http://localhost:8000/api/categorias");
};

categoriaServicios.buscarCategoriaPorCriterio = (criterio) => {
    return axios.get("http://localhost:8000/api/categorias?q=" + criterio);
};

categoriaServicios.cargarCategoria = (id) => {
    return axios.get("http://localhost:8000/api/categorias/" + id);
};

categoriaServicios.guardarCategoria = (categoria) => {
    return axios.post("http://localhost:8000/api/categorias", categoria);
};

categoriaServicios.modificarCategoria = (id, categoria) => {
    return axios.put("http://localhost:8000/api/categorias/" + id, categoria);
};

categoriaServicios.eliminarCategoria = (id) => {
    return axios.delete("http://localhost:8000/api/categorias/" + id);
};

export default categoriaServicios;