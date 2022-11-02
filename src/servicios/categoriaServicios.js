import reposteria from '../imgs/reposteria.jpg';
import confiteria from '../imgs/confiteria.jpg';

const categorias = [
    {
        nombre: "Repostería",
        disponible: true,
        descripcion: "Descripción...",
        imagen: reposteria
    },
    {
        nombre: "Confiteríá",
        disponible: false,
        descripcion: "Descripción...",
        imagen: confiteria
    }
];

const categoriaServicios = {};

categoriaServicios.obtenerCategorias = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categorias);
        }, 2000)
    });
};

export default categoriaServicios;