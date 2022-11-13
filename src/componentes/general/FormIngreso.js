import '../../styles.css';
import { useContext, useState } from 'react';
import LoginServicios from "../../servicios/loginServicios";
import { ContextoUsuario } from '../usuarios/ContextoUsuario';
import EstadosLogin from '../../enums/EstadosLogin';
import { useNavigate } from 'react-router-dom';

const FormIngreso = () => {

  const goTo = useNavigate();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [recordar, setRecordar] = useState(false);
  const { usuario, setUsuario } = useContext(ContextoUsuario);

  const crearSesion = (cuenta) => {
    sessionStorage.setItem("nombres", cuenta.nombres);
    sessionStorage.setItem("estadologin", cuenta.estadologin);
    setUsuario(cuenta);
  }

  const validar = async (event) => {
    event.preventDefault();
    try {
      const credenciales = {
        correo: correo,
        password: password
      };
      const resultado = await LoginServicios.login(credenciales);
      const cuenta = {
        nombres: resultado.data.nombres,
        estadologin: resultado.data.admin ? EstadosLogin.ADMIN : EstadosLogin.CLIENTE
      }
      crearSesion(cuenta);
      if (cuenta.estadologin === EstadosLogin.ADMIN) {
        goTo("/gestor");
      } else {
        goTo("/");
      }
    } catch (error) {
      if (error.response.status === 401) {
        setMensaje(error.response.data);
      }
    }
  }

  const cambiarCorreo = (event) => {
    setCorreo(event.target.value);
    setMensaje("");
  }

  const cambiarPassword = (event) => {
    setPassword(event.target.value);
    setMensaje("");
  }

  const cambiarRecordar = (event) => {
    setRecordar(event.target.checked);
  }

  return (
    <div>
      <h3 className='text-center mt-5'><i className="bi bi-person-vcard me-2"></i>Iniciar sesión</h3>
      <div className='position-relative mt-4'>
        <div className="card border-primary shadow position-absolute top-0 start-50 translate-middle-x" style={{ width: "50%" }}>
          <div className="card-body">
            <form onSubmit={validar}>
              <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="inputEmail3" value={correo} onChange={cambiarCorreo} placeholder="nombre@ejemplo.com" required />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Constraseña</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="inputPassword3" value={password} onChange={cambiarPassword} required />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                  <div className="form-check mb-3">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" checked={recordar} onChange={cambiarRecordar} />Recordar contraseña
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p>
                  <button className="btn btn-primary me-2" onClick={validar} type="submit">Ingresar</button>
                  <a className="btn btn-primary" type="submit" href='/'>Cancelar</a>
                </p>
                <p>{mensaje}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

}

export default FormIngreso;