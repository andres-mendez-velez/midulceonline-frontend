import axios from "axios";

const LoginServicios = {};

LoginServicios.login = async (credenciales) => {
    return axios.post("http://localhost:8000/api/login", credenciales);
}

export default LoginServicios;