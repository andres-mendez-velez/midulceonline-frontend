import axios from "axios";

const usuarioServicios = {};
const URL = "https://mi-dulce-online-beerus-api.herokuapp.com/api/usuarios";

usuarioServicios.obtenerUsuarios = () => {
    return axios.get(URL);
};

usuarioServicios.buscarUsuarioPorCriterio = (criterio) => {
    return axios.get(URL + "?q=" + criterio);
};

usuarioServicios.cargarUsuario = (id) => {
    return axios.get(URL + "/" + id);
};

usuarioServicios.guardarUsuario = (usuario) => {
    return axios.post(URL, usuario);
};

usuarioServicios.modificarUsuario = (id, usuario) => {
    return axios.put(URL + "/" + id, usuario);
};

usuarioServicios.cargarUsuario = (id) => {
    return axios.delete(URL + "/" + id);
};

export default usuarioServicios;