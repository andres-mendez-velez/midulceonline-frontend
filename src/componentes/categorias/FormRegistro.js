const FormRegistro = ()=>{
    return(
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
                <div class="form-group">

                    <label for="exampleFormControlSelect4">Tipo de recidencia</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>Casa</option>
                        <option>ApartaEstudio</option>
                        <option>Unidad redidencial</option>
                    </select>

                    <label for="exampleFormControlInput5">Telefono</label>
                    <input type="number" class="form-control" id="exampleFormControlInput4" placeholder="Ingrese su telefono" />

                    <label for="exampleFormControlInput6">Correo</label>
                    <input type="email" class="form-control" id="exampleFormControlInput5" placeholder="Ingrese su correo electronico" />

                    <label for="exampleFormControlInput7">Codigo Postal</label>
                    <input type="number" class="form-control" id="exampleFormControlInput6" placeholder="Ingrese su codigo postal" />

                    <label for="exampleFormControlInput8">Usuario</label>
                    <input type="text" class="form-control" id="exampleFormControlInput7" placeholder="Ingrese nombre de usuario" />

                    <label for="exampleFormControlInput9">Contraseña</label>
                    <input type="password" class="form-control" id="exampleFormControlInput8" placeholder="Ingrese nombre de usuario" />
                </div>

                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit" >Registar</button>
                    <a href="/" className="btn btn-primary" role="button">Regresar</a>
                </div>
            </div>
        </main>
    </form>

    )
}
export default FormRegistro;