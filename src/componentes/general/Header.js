const Header = () => {
    return (
        <div>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-light">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none ms-5">
                    <span className="fs-4"><i className="bi bi-shop"></i> MiDulceOnline</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="/" className="nav-link active" aria-current="page"><i className="bi bi-house-heart"></i> Inicio</a></li>
                    <li className="nav-item"><a href="/categorias" className="nav-link"><i className="bi bi-bookmark-star"></i> Categorías</a></li>
                    <li className="nav-item"><a href="/productos" className="nav-link"><i className="bi bi-bag-heart"></i> Productos</a></li>
                    <li className="nav-item me-4"><a href="/carrito" className="nav-link"><i className="bi bi-cart2"></i> Carrito de compras</a></li>
                </ul>
            </header>
        </div>
    );
};

export default Header;