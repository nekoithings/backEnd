// Funciones para la tabla "usuarios"

import { Usuario } from '../modelos/usuariosModelo.js';

// Crear un nuevo usuario

const crearUsuario = (req, res) => {
  const { nombre, apellido, correo_electronico, telefono, direccion } = req.body;

  if (!nombre || !apellido || !correo_electronico) {
    res.status(400).send({ mensaje: "Los campos nombre, apellido y correo electrónico son obligatorios." });
    return;
  }

  Usuario.create({ nombre, apellido, correo_electronico, telefono, direccion })
    .then(() => res.status(200).json({ mensaje: "Usuario registrado con éxito" }))
    .catch(err => res.status(500).json({ mensaje: `Error al registrar usuario: ${err}` }));
};


// Buscar un usuario

const buscarUsuarios = (req, res) => {
  Usuario.findAll()
    .then(usuarios => res.status(200).json(usuarios))
    .catch(err => res.status(500).json({ mensaje: `Error al buscar usuarios: ${err}` }));
};


// buscar un usuario por id

const buscarUsuarioId = (req, res) => {
  const id = req.params.id;
  Usuario.findByPk(id)
    .then(usuario => res.status(200).json(usuario))
    .catch(err => res.status(500).json({ mensaje: `Error al buscar usuario: ${err}` }));
};


// Actualizar un usuario

const actualizarUsuario = (req, res) => {
  const id = req.params.id;
  Usuario.update(req.body, { where: { id } })
    .then(([actualizado]) => {
      if (actualizado) res.status(200).json({ mensaje: "Usuario actualizado" });
      else res.status(404).json({ mensaje: "Usuario no encontrado" });
    })
    .catch(err => res.status(500).json({ mensaje: `Error al actualizar usuario: ${err}` }));
};


// Eliminar un usuario

const eliminarUsuario = (req, res) => {
  const id = req.params.id;
  Usuario.destroy({ where: { id } })
    .then(() => res.status(200).json({ mensaje: "Usuario eliminado con éxito" }))
    .catch(err => res.status(500).json({ mensaje: `Error al eliminar usuario: ${err}` }));
};

// Exportar las funciones
export { crearUsuario, buscarUsuarios, buscarUsuarioId, actualizarUsuario, eliminarUsuario };
