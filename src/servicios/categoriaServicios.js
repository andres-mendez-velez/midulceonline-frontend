import axios from "axios";

/*const categorias = [
    {
        nombre: "Repostería",
        disponible: true,
        descripcion: "Descripción...",
        imagen: "reposteria.jpg"
    },
    {
        nombre: "Confiteríá",
        disponible: false,
        descripcion: "Descripción...",
        imagen: "confiteria.jpg"
    }
];*/

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

export default categoriaServicios;