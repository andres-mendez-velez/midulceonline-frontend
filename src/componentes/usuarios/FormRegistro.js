const FormRegistro = () => {
    return (
        <form className="container">
            <main className="form-signin w-50 m-auto ">
                <h1 className="h3 mb-3 fw-normal text-center">Registro</h1>
                <div class="form-group d-grid gap-2">
                    <label for="exampleFormControlInput1">Nombre</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese nombre" />

                    <label for="exampleFormControlInput2">Apellido</label>
                    <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Ingrese Apellido" />

                    <label for="exampleFormControlInput3">Direccion</label>
                    <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Ingrese su domicilio" />

                    <label for="exampleFormControlInput5">Telefono</label>
                    <input type="number" class="form-control" id="exampleFormControlInput4" placeholder="Ingrese su telefono" />

                    <label for="exampleFormControlInput6">Correo</label>
                    <input type="email" class="form-control" id="exampleFormControlInput5" placeholder="Ingrese su correo electronico" />

                    <label for="exampleFormControlInput9">Contraseña</label>
                    <input type="password" class="form-control" id="exampleFormControlInput8" placeholder="Ingrese nombre de usuario" />

                    <div className="py-4 text-center">
                        <button className="btn btn-primary me-2" type="submit">Guardar</button>
                        <a href="/" className="btn btn-dark">Cancelar</a>
                    </div>
                </div>
            </main>
        </form>

    )
}
export default FormRegistro;