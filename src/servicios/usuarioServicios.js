import axios from "axios";

const usuarioServicios = {};

usuarioServicios.obtenerUsuarios = () => {
    return axios.get("http://localhost:8000/api/usuarios");
};

usuarioServicios.buscarUsuarioPorCriterio = (criterio) => {
    return axios.get("http://localhost:8000/api/usuarios?q=" + criterio);
};

usuarioServicios.cargarUsuario = (id) => {
    return axios.get("http://localhost:8000/api/usuarios/" + id);
};

usuarioServicios.guardarUsuario = (usuario) => {
    return axios.post("http://localhost:8000/api/usuarios", usuario);
};

usuarioServicios.modificarUsuario = (id, usuario) => {
    return axios.put("http://localhost:8000/api/usuarios/" + id, usuario);
};

usuarioServicios.cargarUsuario = (id) => {
    return axios.delete("http://localhost:8000/api/usuarios/" + id);
};

export default usuarioServicios;