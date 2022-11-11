import '../../styles.css';
import logo from "../../assets/candy-shop.png";
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
    <div className='text-center'>
      <form onSubmit={validar} className='w-100 m-auto ' style={{ maxWidth: "300px", padding: "15px" }}>
        <img className="mb-4" src={logo} width="72" height="57" alt='Logo de MiDulceOnline' />
        <h1 className='mb-3 fw-normal fuente'>MiDulceOnline</h1>

        <div className="form-floating" >
          <input type="email" className="form-control" value={correo} onChange={cambiarCorreo} id="correo" placeholder="nombre@ejemplo.com" required />
          <label htmlFor="correo">Correo electrónico</label>
        </div>

        <div className="form-floating ">
          <input type="password" className="form-control" value={password} onChange={cambiarPassword} id="password" placeholder="Contraseña" required />
          <label htmlFor="password">Contraseña</label>
        </div>

        <div className="form-check mb-3">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" checked={recordar} onChange={cambiarRecordar} />Recordar contraseña
          </label>
        </div>

      </form>
      <div>
        <button className="btn btn-lg btn-primary me-2" onClick={validar} type="submit">Confirmar</button>
        <a className="btn btn-lg btn-primary" type="submit" href='/'>Cancelar</a>
        {mensaje}
      </div>
    </div>
  )

}

export default FormIngreso;