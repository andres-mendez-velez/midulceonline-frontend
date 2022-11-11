import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import usuarioServicios from "../../servicios/usuarioServicios";

const FormRegistro = () => {

    const goTo = useNavigate();
    const { id } = useParams();

    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const [titulo, setTitulo] = useState("");
    const [icono, setIcono] = useState("");

    const guardarUsuario = async (event) => {
        event.preventDefault();
        try {
            const datosUsuario = {
                nombres: nombres,
                apellidos: apellidos,
                direccion: direccion,
                telefono: telefono,
                correo: correo,
                password: password
            }
            if (id == null) {
                await usuarioServicios.guardarUsuario(datosUsuario);
            } else {
                await usuarioServicios.modificarUsuario(id, datosUsuario)
            }
            goTo("/usuarios");
        } catch (error) {
            console.log(error);
        }
    };

    const cargarUsuario = async () => {
        try {
            const respuesta = await usuarioServicios.cargarUsuario(id);
            if (respuesta.status === 200) {
                setNombres(respuesta.data.nombres);
                setApellidos(respuesta.data.apellidos);
                setDireccion(respuesta.data.direccion);
                setTelefono(respuesta.data.telefono);
                setCorreo(respuesta.data.correo);
                setPassword(respuesta.data.password);
            }
        } catch (error) {
            console.log("Ocurrió un error. " + error);
        }
    };

    useEffect(() => {
        if (id != null) {
            setTitulo("Editar");
            setIcono("pencil-square")
            cargarUsuario();
        } else {
            setTitulo(""); // Continuar...
        }
    })

    return (
        <form className="container">
            <main className="form-signin w-50 m-auto ">
                <h1 className="h3 mb-3 fw-normal text-center">Registro</h1>
                <div class="form-group d-grid gap-2">
                    <label for="nombres">Nombres</label>
                    <input type="text" class="form-control" id="nombres" placeholder="Ingrese nombre" />

                    <label for="apellidos">Apellidos</label>
                    <input type="text" class="form-control" id="apellidos" placeholder="Ingrese Apellido" />

                    <label for="direccion">Dirección</label>
                    <input type="text" class="form-control" id="direccion" placeholder="Ingrese su domicilio" />

                    <label for="telefono">Teléfono</label>
                    <input type="number" class="form-control" id="telefono" placeholder="Ingrese su telefono" />

                    <label for="correo">Correo</label>
                    <input type="email" class="form-control" id="correo" placeholder="Ingrese su correo electronico" />

                    <label for="password">Contraseña</label>
                    <input type="password" class="form-control" id="password" placeholder="Ingrese nombre de usuario" />

                    <div className="py-4 text-center">
                        <button className="btn btn-primary me-2" type="submit">Guardar</button>
                        <a href="/" className="btn btn-dark">Cancelar</a>
                    </div>
                </div>
            </main>
        </form>

    )
}
export default FormRegistro;