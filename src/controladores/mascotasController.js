// Funciones para la tabla "mascotas"

import { Mascota } from '../modelos/mascotaModelo.js';


// Crear un recurso Mascota

const crear = (req, res) => {
  if (!req.body.nombre) {
    res.status(400).send({ mensaje: "El nombre no puede estar vacío." });
    return;
  }

  const nuevaMascota = {
    nombre: req.body.nombre,
    edad: req.body.edad,
    raza: req.body.raza,
    genero: req.body.genero,
    estado: req.body.estado,
    tipo_id: req.body.tipo_id
  };

  Mascota.create(nuevaMascota)
    .then(() => res.status(200).json({ mensaje: "Registro de Mascota creado con éxito" }))
    .catch(err => res.status(500).json({ mensaje: `Error al crear Mascota: ${err}` }));
};


// Buscar todas las mascotas

const buscar = (req, res) => {
  Mascota.findAll()
    .then(resultado => res.status(200).json(resultado))
    .catch(err => res.status(500).json({ mensaje: `Error al buscar Mascotas: ${err}` }));
};


// Buscar mascota por id de la mascota

const buscarId = (req, res) => {
  const id = req.params.id;

  Mascota.findByPk(id)
    .then(resultado => res.status(200).json(resultado))
    .catch(err => res.status(500).json({ mensaje: `Error al buscar Mascota: ${err}` }));
};


// Actualizar una mascota

const actualizar = (req, res) => {
  const id = req.params.id;

  Mascota.update(req.body, { where: { id } })
    .then(([filasActualizadas]) => {
      if (filasActualizadas === 0) {
        res.status(404).json({ mensaje: "No se encontró Mascota para actualizar o no hubo cambios" });
      } else {
        res.status(200).json({ mensaje: "Mascota actualizada con éxito" });
      }
    })
    .catch(err => res.status(500).json({ mensaje: `Error al actualizar Mascota: ${err}` }));
};


// Eliminar una mascota

const eliminar = (req, res) => {
  const id = req.params.id;

  Mascota.destroy({ where: { id } })
    .then(() => res.status(200).json({ mensaje: "Mascota eliminada con éxito" }))
    .catch(err => res.status(500).json({ mensaje: `Error al eliminar Mascota: ${err}` }));
};

export { crear, buscar, buscarId, actualizar, eliminar };
