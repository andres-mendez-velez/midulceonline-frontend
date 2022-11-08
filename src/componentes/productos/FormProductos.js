import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import categoriaServicios from "../../servicios/categoriaServicios";
import productoServicios from "../../servicios/productoServicios";
import Estados from "../../enums/Estados";

const FormProductos = () => {

    const goTo = useNavigate();
    const { id } = useParams();

    const [nombre, setNombre] = useState("");
    const [marca, setMarca] = useState("");
    const [presentacion, setPresentacion] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [precio, setPrecio] = useState("");
    const [keywords, setKeywords] = useState([]);
    const [disponible, setDisponible] = useState(false);
    const [categoria, setCategoria] = useState("");
    const [imagenes, setImagenes] = useState([]);
    const [listaCategorias, setListaCategorias] = useState([]);
    const [estado, setEstado] = useState(Estados.CARGANDO);

    const [titulo, setTitulo] = useState("");
    const [icono, setIcono] = useState("");

    const guardarProducto = async (event) => {
        event.preventDefault();
        try {
            const datosProducto = {
                nombre: nombre,
                marca: marca,
                presentacion: presentacion,
                cantidad: cantidad,
                precio: precio,
                keywords: keywords,
                disponible: disponible,
                categoria: categoria,
                imagenes: imagenes
            }
            console.log(datosProducto);
            if (id == null) {
                await productoServicios.guardarProducto(datosProducto);
            } else {
                await productoServicios.modificarProducto(id, datosProducto);
            }
            goTo("/productos");
        } catch (error) {
            console.log(error);
        }
    };

    const cargarProducto = async () => {
        try {
            const respuesta = await productoServicios.cargarProducto(id);
            await cargarCategorias();
            if (respuesta.status === 200) {
                setNombre(respuesta.data.nombre);
                setMarca(respuesta.data.marca);
                setPresentacion(respuesta.data.presentacion);
                setCantidad(respuesta.data.cantidad);
                setPrecio(respuesta.data.precio);
                setKeywords(respuesta.data.keywords);
                setDisponible(respuesta.data.disponible);
                setCategoria(respuesta.data.categoria);
                setImagenes(respuesta.data.imagenes);
            }
        } catch (error) {
            console.log("Ocurrió un error. " + error);
        }
    };

    useEffect(() => {
        cargarCategorias();
        if (id != null) {
            setTitulo("Editar");
            setIcono("pencil-square");
            cargarProducto();
        } else {
            setTitulo("Nuevo");
            setIcono("bag-plus");
        }
    }, []);

    const cargarCategorias = async () => {
        try {
            const respuesta = await categoriaServicios.obtenerCategorias();
            if (respuesta.data.length > 0) {
                setListaCategorias(respuesta.data);
                setEstado(Estados.OK);
            }
            else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR);
        }
    };

    const cambiarNombre = (event) => {
        setNombre(event.target.value);
    };

    const cambiarMarca = (event) => {
        setMarca(event.target.value);
    };

    const cambiarPresentacion = (event) => {
        setPresentacion(event.target.value);
    };

    const cambiarCantidad = (event) => {
        setCantidad(event.target.value);
    };

    const cambiarPrecio = (event) => {
        setPrecio(event.target.value);
    };

    const cambiarKeywords = (event) => {
        setKeywords(event.target.value.split(','));
    };

    const cambiarDisponible = (event) => {
        setDisponible(event.target.checked);
    };

    const cambiarCategoria = (event) => {
        setCategoria(event.target.value);
    };

    const cambiarImagenes = (event) => {
        setImagenes(event.target.value.split(','));
    };

    return (
        <form className="container col-6" onSubmit={guardarProducto} >
            <h4 className="py-3 text-center"><i className={"bi bi-" + icono + " me-2"}></i>{titulo} producto</h4>
            <div className="mb-3">
                <label htmlFor="name" className="form-label" >Nombre:</label>
                <input type="text" className="form-control" onChange={cambiarNombre} name="nombre" id="nombre" value={nombre}
                    aria-label="nombre" aria-describedby="nombre" placeholder="Ingrese aquí el producto" required />
            </div>
            <div className="mb-3">
                <label htmlFor="marca" className="form-label" >Marca:</label>
                <input type="text" className="form-control" onChange={cambiarMarca} value={marca} id="marca" rows="3"
                    placeholder="Ingrese aquí la marca" name="marca" required ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="presentacion" className="form-label" >Presentacion:</label>
                <input type="text" className="form-control" onChange={cambiarPresentacion} value={presentacion} id="presentacion" rows="3"
                    placeholder="Ingrese aquí la presentacion " name="presentacion" required ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="cantidad" className="form-label" >Cantidad:</label>
                <input type="number" className="form-control" onChange={cambiarCantidad} value={cantidad} id="cantidad" rows="3"
                    placeholder="Ingrese aquí la cantidad" name="cantidad" required ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="precio" className="form-label" >Precio:</label>
                <input type="number" className="form-control" onChange={cambiarPrecio} value={precio} id="precio" rows="3"
                    placeholder="Ingrese aquí la precio" name="precio" required ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="keywords" className="form-label" >Palabras clave:</label>
                <input type="text" className="form-control" onChange={cambiarKeywords} value={keywords} id="keywords" rows="3"
                    placeholder="Ingrese aquí las keywords (máximo 100 caracteres)" name="keywords" ></input>
            </div>
            <label htmlFor="categoria1" className="form-label" >Categoria:</label>
            <select className="form-select" id="categoria1" aria-label="Seleccion de categorias" onChange={cambiarCategoria} required >
                {
                    estado === Estados.OK ?
                        listaCategorias.map(categoria => (
                            <option key={categoria._id} value={categoria.nombre}>{categoria.nombre}</option>
                        ))
                        : estado === Estados.CARGANDO ?
                            (<option value="0" disabled >Buscando categorías...</option>)
                            : estado === Estados.VACIO ?
                                (<option value="0" disabled >No ha creado ninguna categoría</option>)
                                : (<option value="0" disabled >Ha ocurrido un error.</option>)
                }
            </select>
            <div className="mb-3">
                <label htmlFor="imagenes" className="form-label">Imágenes:</label>
                <input className="form-control" onChange={cambiarImagenes} value={imagenes} type="text" id="imagenes" name="imagenes"
                    placeholder="Ingrese el nombre de las imágenes" />
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={cambiarDisponible} checked={disponible}
                    id="disponible" name="disponible" />
                <label className="form-check-label" htmlFor="disponible">Disponible</label>
            </div>
            <div className="py-4 text-center">
                <button className="btn btn-primary me-2">Guardar</button>
                <a href="/productos" className="btn btn-dark">Cancelar</a>
            </div>
        </form>
    );
};

export default FormProductos;