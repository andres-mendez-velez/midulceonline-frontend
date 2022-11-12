const publicImgsURL = process.env.PUBLIC_URL + "/imgs/productos/";

function CardProducto({ producto }) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">

          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              {
                producto.imagenes.map(element => {
                  return (
                    <div key={`element_${element}`} class="carousel-item active">
                      <img src={publicImgsURL + element} className="img-fluid rounded-start d-block"
                        alt={"Imagen de producto" + producto.nombre} width="75%"/>
                    </div>
                  )
                })
              }
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">
              {producto.marca}<br />
              {producto.presentacion}<br />
              {producto.cantidad}<br />
              <b>${producto.precio}</b><br />
              Categoría: {producto.categoria}<br />
            </p>
            <p className="card-text"><small className="text-muted">{producto.disponible ? "Disponible" : "No disponible"}</small></p>
            <button className="btn btn-primary">Llevar en mi carrito</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProducto;