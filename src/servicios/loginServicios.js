import axios from "axios";

const LoginServicios = {};

LoginServicios.login = async (credenciales) => {
    return axios.post("https://mi-dulce-online-beerus-api.herokuapp.com/api/login", credenciales);
}

export default LoginServicios;