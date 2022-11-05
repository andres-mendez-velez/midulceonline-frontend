import '../../styles.css';

const Banner = () => {
    return (
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
                            <p><a className="btn btn-lg btn-primary" href="/">Regístrate, es gratis!</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item cover3">

                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Siempre ofreciéndote los mejores sabores.</h1>
                            <p>Nuestros científicos del paladar se encargan de crear sabores que dejarán una huella en tí.</p>
                            <p><a className="btn btn-lg btn-primary" href="/">Inicia sesión</a></p>
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

    );
};

export default Banner;