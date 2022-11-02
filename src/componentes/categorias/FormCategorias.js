import logo from "../../imgs/logo.svg";
const FormCategorias = () => {
    return (
        <form className="text-center position-absolute top-50 start-50 translate-middle">
            <img className="mb-4" src={logo} alt="Logotipo de Mi Dulce Online" height="80" />
            <h3 className="h3 fw-normal">Nueva categoría</h3>
            <div className="input-group mb-3">
                <span className="input-group-text" id="categoria" placeholder="Ingrese la categoría">Categoría</span>
                <input type="text" className="form-control" aria-label="" aria-describedby="categoria" />
            </div>
            <div className="mb-3">
                <textarea className="form-control" id="descripcion" rows="3" placeholder="Ingrese la descripción"></textarea>
            </div>
            <div className="input-group mb-3">
                <input type="file" className="form-control" id="imagen" />
                <label className="input-group-text" for="imagen">Upload</label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input row col-4" type="checkbox" role="switch" id="disponible" />
                <label className="form-check row col-4" for="disponible">Disponible</label>
            </div>
            <div className="container py-4">
                <a class="btn btn-primary me-4" href="/categorias">Aceptar</a>
                <a class="btn btn-secondary" href="/categorias">Cancelar</a>
            </div>
        </form>
    );
};

export default FormCategorias;