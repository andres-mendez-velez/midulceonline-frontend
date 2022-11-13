import '../../styles.css';
import finanzas from "../../assets/imagen-finanzas.jpg";
import reposteria from "../../assets/imagen-reposteria.jpg";
import variedad from "../../assets/imagen-variedad.jpg";

const Banner = () => {
  return (
    <div>
      <div id="myCarousel" className="carousel slide fuente" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active cover1">

            <div className="container">
              <div className="carousel-caption">
                <h1>MiDulceOnline</h1>
                <p>"Compartiendo dulces momentos"</p>
              </div>
            </div>
          </div>
          <div className="carousel-item cover2">

            <div className="container">
              <div className="carousel-caption">
                <h1>Contamos con el mejor equipo de trabajo.</h1>
                <p>Desde MiDulceOnline nos aseguramos de que nuestro equipo sienta pasión por este arte.</p>
                <p><a className="btn btn-lg btn-primary" href="/usuarios/form">Regístrate, es gratis!</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item cover3">

            <div className="container">
              <div className="carousel-caption">
                <h1>Siempre ofreciéndote los mejores sabores.</h1>
                <p>Nuestros científicos del paladar se encargan de crear sabores que dejarán una huella en tí.</p>
                <p><a className="btn btn-lg btn-primary" href="/login/form">Inicia sesión</a></p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className='ms-5 me-5 mt-4'>
        <div className="container mt-5 mb-5">
          <div className="row justify-content-center">

            <div className="card mt-2 me-2" style={{ width: "18rem" }}>
              <img src={finanzas} className="card-img-top" alt="Imagen de arbol creciendo entre monedas" />
              <div className="card-body">
                <h5 className="card-title">Comercio justo</h5>
                <p className="card-text">
                  No hay nada más importante para nosotros que ser proveedores de confianza para todos nuestros clientes,
                  por lo que tratamos tú economía con la mayor seriedad posible.
                </p>
              </div>
            </div>

            <div className="card mt-2 me-2" style={{ width: "18rem" }}>
              <img src={reposteria} className="card-img-top" alt="Imagen de arbol creciendo entre monedas" />
              <div className="card-body">
                <h5 className="card-title">Experiencia</h5>
                <p className="card-text">
                  Nuestro equipo está conformado por personas calificadas que dedican su vida a ofrecerte los sabores que
                  buscas.
                </p>
              </div>
            </div>

            <div className="card mt-2 me-2" style={{ width: "18rem" }}>
              <img src={variedad} className="card-img-top" alt="Imagen de arbol creciendo entre monedas" />
              <div className="card-body">
                <h5 className="card-title">Variedad para todos los gustos</h5>
                <p className="card-text">
                  Ofrecemos el 90% de productos de repostería, heladería y panadería de la región.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Banner;