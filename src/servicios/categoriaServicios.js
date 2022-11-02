import reposteria from '../imgs/reposteria.jpg';
import confiteria from '../imgs/confiteria.jpg';

const categorias = [
    {
        nombre: "Repostería",
        disponible: true,
        imagen: reposteria
    },
    {
        nombre: "Confiteríá",
        disponible: false,
        imagen: confiteria
    }
];

const categoriaServicios = {};

categoriaServicios.obtenerCategorias = () => {
    return categorias;
};

export default categoriaServicios;