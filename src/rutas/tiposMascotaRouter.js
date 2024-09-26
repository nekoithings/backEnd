import express from 'express';
import { crearTipoMascota, buscarTiposMascotas, buscarTipoMascotaId, actualizarTipoMascota, eliminarTipoMascota } from '../controladores/tiposMascotaController.js';

const routerTiposMascotas = express.Router();

routerTiposMascotas.post('/crear', crearTipoMascota);
routerTiposMascotas.get('/buscar', buscarTiposMascotas);
routerTiposMascotas.get('/buscarId/:id', buscarTipoMascotaId);
routerTiposMascotas.put('/actualizar/:id', actualizarTipoMascota);
routerTiposMascotas.delete('/eliminar/:id', eliminarTipoMascota);

export { routerTiposMascotas };
