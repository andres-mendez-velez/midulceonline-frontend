import '../../styles.css';
import logo from "../../imgs/candy-shop.png";
const Ingreso = () => {
    return (
        <div>
            <main class="form-signin w-25 m-auto text-center ">
                <form>
                    <p><img class="mb-3 mt-5" src={logo} width="72" height="57" alt='Logo de MiDulceOnline' /><h1 className='fuente'>MiDulceOnline</h1></p>
                   
                    <div class="form-floating" >
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Ingrese correo</label>
                    </div>
                    <div class="form-floating ">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña" />
                        <label for="floatingPassword">Contraseña</label>
                    </div>

                    <div class="d-grid gap-2">
                        <button class="w-100 btn btn-lg btn-primary" type="submit">Iniciar Sesión</button>
                        <a href="/registroForm/form" className="w-100 btn btn-lg btn-primary" type="button">Registrarse</a>
                        <a href="/invitado" className="w-100 btn btn-lg btn-primary" type="button">Invitado</a>
                    </div>

                </form>

            </main>



        </div>

    )

}

export default Ingreso;