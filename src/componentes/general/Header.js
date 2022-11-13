import '../../styles.css';
import logo from "../../assets/candy-shop.png";
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ContextoUsuario } from '../usuarios/ContextoUsuario';
import EstadosLogin from '../../enums/EstadosLogin'; // Falta cerrar sesion en el Header...

const Header = () => {
  const goTo = useNavigate();
  const { usuario, setUsuario } = useContext(ContextoUsuario);

  function validarSesion() {
    if (sessionStorage.getItem("estadologin") != null) {
      const usuarioSesion = {
        nombres: sessionStorage.getItem("nombres"),
        estadologin: parseInt(sessionStorage.getItem("estadologin"))
      };
      setUsuario(usuarioSesion);
    } else {
      setUsuario({
        nombres: "",
        estadologin: EstadosLogin.NO_INGRESO
      });
    }
  }

  function cerrarSesion() {
    sessionStorage.clear();
    validarSesion();
    goTo("/");
  }

  useEffect(() => {
    validarSesion();
  }, []);

  return (
    <div>
      <header className="fuente d-flex flex-wrap justify-content-center py-2 mb-3 border-bottom bg-light">
        <a href="/" className="d-flex align-items-center mb-md-0 me-md-auto text-dark text-decoration-none ms-5">
          <span className="fs-4"><img src={logo} height="30" alt='Logo de MiDulceOnline' /><strong>MiDulceOnline</strong></span>
        </a>
        {
          usuario.estadologin === EstadosLogin.NO_INGRESO ?
            (
              <ul className="nav nav-pills me-5">
                <li className="nav-item me-2">
                  <a href="/login/form" className="nav-link">
                  <i className="bi bi-person-vcard me-2"></i>Ingreso
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/usuarios/form" className="nav-link">
                    <i className="bi bi-person-fill-add me-2"></i>Registro
                  </a>
                </li>
              </ul>
            ) :
            usuario.estadologin === EstadosLogin.ADMIN ?
              (
                <ul className="nav nav-pills me-5">
                  <li className="nav-item">
                    <a href="/usuarios/form" className="nav-link active" aria-current="page">
                      <i class="bi bi-person-square me-2"></i>{usuario.nombres}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/categorias" className="nav-link">
                      <i className="bi bi-bookmark-star me-2" />Categorías
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/productos" className="nav-link">
                      <i className="bi bi-bag-heart me-2" />Productos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/pedidos" className="nav-link"><i className="bi bi-truck me-2" />Pedidos
                    </a>
                  </li>
                  <li className="nav-item">
                    <button type='button' onClick={cerrarSesion} className="nav-link">
                      <i class="bi bi-x-circle me-2"></i>Salir
                    </button>
                  </li>
                </ul>
              ) :
              (
                <ul className="nav nav-pills">
                  <li className="nav-item">
                    <a href="/usuarios/form" className="nav-link active" aria-current="page">
                      <i class="bi bi-person-square me-2"></i>{usuario.nombres}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/productos/cliente" className="nav-link" aria-current="page">
                      <i className="bi bi-house-heart me-2"></i>Catálogo
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/categorias/cliente" className="nav-link">
                      <i className="bi bi-bookmark-star me-2"></i>Categorías
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/carrito_compras" className="nav-link">
                      <i className="bi bi-cart me-2"></i>Carrito
                    </a>
                  </li>
                  <li className="nav-item">
                    <button type='button' onClick={cerrarSesion} className="nav-link">
                      <i class="bi bi-x-circle me-2"></i>Salir
                    </button>
                  </li>
                </ul>
              )
        }
      </header>
    </div>
  );
};

export default Header;