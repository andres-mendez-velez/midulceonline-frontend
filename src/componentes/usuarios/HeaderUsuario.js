import '../../styles.css';
import logo from "../../imgs/candy-shop.png";
const HeaderUsuario = () => {
    return (
        <div>
            <header className="fuente d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-light">
                <a href="/" className="d-flex align-items-center mb-md-0 me-md-auto text-dark text-decoration-none ms-5">
                    <span className="fs-4"><img src={logo} height="30" alt='Logo de MiDulceOnline' /><strong>MiDulceOnline</strong></span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="/" className="nav-link active" aria-current="page"><i className="bi bi-house-heart"></i> Inicio</a></li>
                    <li className="nav-item"><a href="/catalogo" className="nav-link" aria-current="page"><i className="bi bi-house-heart"></i> Catalogo</a></li>
                    <li className="nav-item"><a href="/carrito_compras" className="nav-link"><i className="bi bi-bookmark-star"></i> Carrito de compras  </a></li>
                    <li className="nav-item"><a href="/estado_envio" className="nav-link"><i className="bi bi-bag-heart"></i> Estado Envio</a></li>

                </ul>
            </header>
        </div>

    )


}
export default HeaderUsuario;