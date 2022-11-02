import logo from "../../imgs/logo.svg";
const Header = () => {
    return (
        <div>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-light">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none ms-4">
                    <img src={logo} alt="Logotipo de MI Dulce Online" height="40" />
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="/" className="nav-link active" aria-current="page">Inicio</a></li>
                    <li className="nav-item"><a href="/categorias" className="nav-link">Categorías</a></li>
                    <li className="nav-item"><a href="/productos" className="nav-link">Productos</a></li>
                    <li className="nav-item"><a href="/carrito" className="nav-link">Carrito de compras</a></li>
                    <li className="nav-item"><button type="button" class="btn btn-outline-primary me-2">Inicia sesión</button></li>
                    <li className="nav-item"><button type="button" class="btn btn-outline-primary me-2">Regístrate</button></li>
                </ul>
            </header>
        </div>
    );
};

export default Header;