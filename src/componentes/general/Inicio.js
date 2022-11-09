import HeaderUsuario from "../usuarios/HeaderUsuario";
import Banner from "./Banner";
import FormIngreso from "../general/FormIngreso";

function Inicio() {
    return (
        <div>
            <HeaderUsuario />
            <Banner />
            <FormIngreso />
        </div>
    )
}

export default Inicio;