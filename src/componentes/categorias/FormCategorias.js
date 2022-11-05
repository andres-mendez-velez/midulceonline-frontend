import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import categoriaServicios from "../../servicios/categoriaServicios";

const FormCategorias = () => {

    const goTo = useNavigate();
    const { id } = useParams();

    const [nombre, setNombre] = useState("");
    const [disponible, setDisponible] = useState(false);
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState("");

    const [titulo, setTitulo] = useState("");
    const [icono, setIcono] = useState("");

    const guardarCategoria = async (event) => {
        event.preventDefault();
        try {
            const datosCategoria = {
                nombre: nombre,
                disponible: disponible,
                descripcion: descripcion,
                imagen: imagen
            }
            console.log(datosCategoria);
            if (id == null) {
                await categoriaServicios.guardarCategoria(datosCategoria);
            } else {
                await categoriaServicios.modificarCategoria(id, datosCategoria);
            }
            goTo("/categorias");
        } catch (error) {
            console.log(error);
        }
    };

    const cargarCategoria = async () => {
        try {
            const respuesta = await categoriaServicios.cargarCategoria(id);
            if (respuesta.status === 200) {
                setNombre(respuesta.data.nombre);
                setDisponible(respuesta.data.disponible);
                setDescripcion(respuesta.data.descripcion);
                setImagen(respuesta.data.imagen);
            }
        } catch (error) {
            console.log("Ocurrió un error. " + error);
        }
    };

    useEffect(() => {
        if (id != null) {
            setTitulo("Editar");
            setIcono("pencil-square")
            cargarCategoria();
        } else {
            setTitulo("Nueva");
            setIcono("bookmark-plus")
        }
    }, []);

    const cambiarNombre = (event) => {
        setNombre(event.target.value);
    };

    const cambiarDisponible = (event) => {
        setDisponible(event.target.checked);
    };

    const cambiarDescripcion = (event) => {
        setDescripcion(event.target.value);
    };

    const cambiarImagen = (event) => {
        setImagen(event.target.value);
    };

    return (
        <form className="container col-6" onSubmit={guardarCategoria}>
            <h4 className="py-3 text-center"><i className={"bi bi-" + icono + " me-2"}></i>{titulo} categoría</h4>
            <div className="input-group mb-3">
                <span className="input-group-text" id="nombre" name="nombre">Categoría</span>
                <input type="text" className="form-control" onChange={cambiarNombre} value={nombre} aria-label="nombre" aria-describedby="nombre" placeholder="Ingrese la categoría" required />
            </div>
            <div className="mb-3">
                <textarea className="form-control" onChange={cambiarDescripcion} value={descripcion} id="descripcion" rows="3" placeholder="Ingrese la descripción" name="descripcion"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="imagen" className="form-label">Seleccione una imágen para la categoría:</label>
                <input className="form-control" onChange={cambiarImagen} value={imagen} type="text" id="imagen" name="imagen" />
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={cambiarDisponible} checked={disponible} id="disponible" name="disponible" />
                <label className="form-check-label" htmlFor="disponible">Disponible</label>
            </div>
            <div className="py-4 text-center">
                <button className="btn btn-primary me-2">Guardar</button>
                <a href="/categorias" className="btn btn-dark">Cancelar</a>
            </div>
        </form>
    );
};

export default FormCategorias;