// Funciones para la tabla "tipos_mascotas"

import { TipoMascota } from '../modelos/tiposMascotaModelo.js';

// Crear un tipo de mascota

const crearTipoMascota = (req, res) => {
  const { nombre_tipo } = req.body;

  if (!nombre_tipo) {
    res.status(400).send({ mensaje: "El nombre del tipo de mascota no puede estar vacío." });
    return;
  }

  TipoMascota.create({ nombre_tipo })
    .then(() => res.status(200).json({ mensaje: "Tipo de Mascota creado con éxito" }))
    .catch(err => res.status(500).json({ mensaje: `Error al crear Tipo de Mascota: ${err}` }));
};


// Buscar todos los tipos de mascota

const buscarTiposMascotas = (req, res) => {
  TipoMascota.findAll()
    .then(tipos => res.status(200).json(tipos))
    .catch(err => res.status(500).json({ mensaje: `Error al buscar Tipos de Mascotas: ${err}` }));
};


// Buscar un tipo de mascota por id

const buscarTipoMascotaId = (req, res) => {
  const id = req.params.id;

  TipoMascota.findByPk(id)
    .then(tipo => res.status(200).json(tipo))
    .catch(err => res.status(500).json({ mensaje: `Error al buscar Tipo de Mascota: ${err}` }));
};

// Buscar un tipo de mascota por id

const actualizarTipoMascota = (req, res) => {
  const id = req.params.id;

  TipoMascota.update(req.body, { where: { id } })
    .then(([filasActualizadas]) => {
      if (filasActualizadas === 0) {
        res.status(404).json({ mensaje: "No se encontró el Tipo de Mascota para actualizar o no hubo cambios" });
      } else {
        res.status(200).json({ mensaje: "Tipo de Mascota actualizado con éxito" });
      }
    })
    .catch(err => res.status(500).json({ mensaje: `Error al actualizar Tipo de Mascota: ${err}` }));
};


// Eliminar un tipo de mascota por id

const eliminarTipoMascota = (req, res) => {
  const id = req.params.id;

  TipoMascota.destroy({ where: { id } })
    .then(() => res.status(200).json({ mensaje: "Tipo de Mascota eliminado con éxito" }))
    .catch(err => res.status(500).json({ mensaje: `Error al eliminar Tipo de Mascota: ${err}` }));
};

// Exportar las funciones
export { crearTipoMascota, buscarTiposMascotas, buscarTipoMascotaId, actualizarTipoMascota, eliminarTipoMascota };
