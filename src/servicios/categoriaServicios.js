const categorias = [
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