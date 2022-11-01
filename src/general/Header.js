const Header = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4">Mi Dulce Online</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="/" className="nav-link active" aria-current="page">Inicio</a></li>
                    <li className="nav-item"><a href="/categorias" className="nav-link">Categorías</a></li>
                    <li className="nav-item"><a href="/productos" className="nav-link">Productos</a></li>
                    <li className="nav-item"><a href="/carrito" className="nav-link">Carrito de compras</a></li>
                    <li className="nav-item"><button type="button" class="btn btn-outline-primary">Inicia sesión</button></li>
                    <li className="nav-item"><button type="button" class="btn btn-outline-primary ms-2">Regístrate</button></li>
                </ul>
            </header>
        </div>
    );
};

export default Header;