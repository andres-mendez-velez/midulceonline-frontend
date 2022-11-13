import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import usuarioServicios from "../../servicios/usuarioServicios";

const FormRegistro = () => {

  const goTo = useNavigate();
  const { id } = useParams();

  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [documento, setDocumento] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);

  const [titulo, setTitulo] = useState("");
  const [icono, setIcono] = useState("");

  const guardarUsuario = async (event) => {
    event.preventDefault();
    try {
      const datosUsuario = {
        nombres: nombres,
        apellidos: apellidos,
        documento: documento,
        direccion: direccion,
        telefono: telefono,
        correo: correo,
        password: password,
        admin: admin
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
        setDocumento(respuesta.data.documento);
        setDireccion(respuesta.data.direccion);
        setTelefono(respuesta.data.telefono);
        setCorreo(respuesta.data.correo);
        setPassword(respuesta.data.password);
        setAdmin(respuesta.data.admin);
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
      setTitulo("");
      setIcono("bookmark-plus");
    }
  }, []);

  function cambiarNombres(event) {
    setNombres(event.target.value);
  }

  function cambiarApellidos(event) {
    setApellidos(event.target.value);
  }

  function cambiarDocumento(event) {
    setDocumento(event.target.value);
  }

  function cambiarDireccion(event) {
    setDireccion(event.target.value);
  }

  function cambiarTelefono(event) {
    setTelefono(event.target.value);
  }

  function cambiarCorreo(event) {
    setCorreo(event.target.value);
  }

  function cambiarPassword(event) {
    setPassword(event.target.value);
  }

  function cambiarAdmin(event) {
    setAdmin(event.target.checked);
  }

  return (
    <form className="container" onSubmit={guardarUsuario}>
      <main className="form-signin w-50 m-auto ">
        <h1 className="h3 mb-3 fw-normal text-center">
          <i className={"bi bi-" + icono + " me-2"}></i>{titulo} cuenta
        </h1>
        <div class="form-group d-grid gap-2">
          <label for="nombres">Nombres</label>
          <input type="text" class="form-control" id="nombres" value={nombres}
            placeholder="Ingrese aquí sus nombres" onChange={cambiarNombres} />

          <label for="apellidos">Apellidos</label>
          <input type="text" class="form-control" id="apellidos" value={apellidos}
            placeholder="Ingrese aquí sus apellidos" onChange={cambiarApellidos} />

          <label for="documento">Documento de Identificación:</label>
          <input type="number" class="form-control" id="documento" value={documento}
            placeholder="Ingrese aquí su documento" onChange={cambiarDocumento} />

          <label for="direccion">Dirección</label>
          <input type="text" class="form-control" id="direccion" value={direccion}
            placeholder="Ingrese aquí su domicilio" onChange={cambiarDireccion} />

          <label for="telefono">Teléfono</label>
          <input type="number" class="form-control" id="telefono" value={telefono}
            placeholder="Ingrese aquí su telefono" onChange={cambiarTelefono} />

          <label for="correo">Correo</label>
          <input type="email" class="form-control" id="correo" value={correo}
            placeholder="Ingrese aquí email" onChange={cambiarCorreo} />

          <label for="password">Contraseña</label>
          <input type="password" class="form-control" id="password" value={password}
            placeholder="Ingrese aquí su contraseña" onChange={cambiarPassword} />

          <div className="form-check">
            <input className="form-check-input" type="checkbox" onChange={cambiarAdmin} checked={admin}
              id="admin" name="admin" />
            <label className="form-check-label" htmlFor="admin">Administrador</label>
          </div>

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