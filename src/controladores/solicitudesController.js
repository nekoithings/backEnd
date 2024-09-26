// Funciones para la tabla "solicitudes_adopcions"

import { SolicitudAdopcion } from '../modelos/solicitudesModelo.js';


// Crear una solicitud

const crearSolicitud = (req, res) => {
  const { usuario_id, mascota_id, comentarios } = req.body;

  if (!usuario_id || !mascota_id) {
    res.status(400).send({ mensaje: "Usuario y Mascota son campos obligatorios." });
    return;
  }

  SolicitudAdopcion.create({ usuario_id, mascota_id, comentarios })
    .then(() => res.status(200).json({ mensaje: "Solicitud creada con éxito" }))
    .catch(err => res.status(500).json({ mensaje: `Error al crear solicitud: ${err}` }));
};


// Buscar todas las solicitudes

const buscarSolicitudes = (req, res) => {
  SolicitudAdopcion.findAll()
    .then(solicitudes => res.status(200).json(solicitudes))
    .catch(err => res.status(500).json({ mensaje: `Error al buscar solicitudes: ${err}` }));
};


// Buscar una solicitud por id

const buscarSolicitudId = (req, res) => {
  const id = req.params.id;

  SolicitudAdopcion.findByPk(id)
    .then(solicitud => {
      if (solicitud) {
        res.status(200).json(solicitud);
      } else {
        res.status(404).json({ mensaje: "Solicitud no encontrada" });
      }
    })
    .catch(err => res.status(500).json({ mensaje: `Error al buscar solicitud: ${err}` }));
};


// Actualizar una solicitud

const actualizarSolicitud = (req, res) => {
  const id = req.params.id;

  SolicitudAdopcion.update(req.body, { where: { id } })
    .then(([filasActualizadas]) => {
      if (filasActualizadas === 0) {
        res.status(404).json({ mensaje: "No se encontró la solicitud para actualizar o no hubo cambios" });
      } else {
        res.status(200).json({ mensaje: "Solicitud actualizada con éxito" });
      }
    })
    .catch(err => res.status(500).json({ mensaje: `Error al actualizar solicitud: ${err}` }));
};


// Eliminar una solicitud

const eliminarSolicitud = (req, res) => {
  const id = req.params.id;

  SolicitudAdopcion.destroy({ where: { id } })
    .then(() => res.status(200).json({ mensaje: "Solicitud eliminada con éxito" }))
    .catch(err => res.status(500).json({ mensaje: `Error al eliminar solicitud: ${err}` }));
};


// Exportar las funciones
export { crearSolicitud, buscarSolicitudes, buscarSolicitudId, actualizarSolicitud, eliminarSolicitud };
