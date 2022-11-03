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

export default categoriaServicios;