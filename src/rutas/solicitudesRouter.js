import express from 'express';
import { crearSolicitud, buscarSolicitudes, buscarSolicitudId, actualizarSolicitud, eliminarSolicitud } from '../controladores/solicitudesController.js';

const routerSolicitudes = express.Router();

routerSolicitudes.get('/', (req, res) => {
    res.send('Solicitudes de adopción para mascotas');
});

routerSolicitudes.post('/crear', crearSolicitud);
routerSolicitudes.get('/buscar', buscarSolicitudes);
routerSolicitudes.get('/buscarId/:id', buscarSolicitudId);
routerSolicitudes.put('/actualizar/:id', actualizarSolicitud);
routerSolicitudes.delete('/eliminar/:id', eliminarSolicitud);

export { routerSolicitudes };
