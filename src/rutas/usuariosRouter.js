import express from 'express';
import { crearUsuario, buscarUsuarios, buscarUsuarioId, actualizarUsuario, eliminarUsuario } from '../controladores/usuariosController.js';

const routerUsuarios = express.Router();

routerUsuarios.post('/crear', crearUsuario);
routerUsuarios.get('/buscar', buscarUsuarios);
routerUsuarios.get('/buscarId/:id', buscarUsuarioId);
routerUsuarios.put('/actualizar/:id', actualizarUsuario);
routerUsuarios.delete('/eliminar/:id', eliminarUsuario);

export { routerUsuarios };
