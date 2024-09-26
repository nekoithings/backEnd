import { DataTypes } from 'sequelize';
import { db } from '../database/conexion.js';

const Mascota = db.define('mascotas', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  raza: {
    type: DataTypes.STRING,
    allowNull: true
  },
  genero: {
    type: DataTypes.ENUM('Macho', 'Hembra'),
    allowNull: false
  },
  estado: {
    type: DataTypes.ENUM('Disponible', 'Adoptado', 'En Proceso'),
    defaultValue: 'Disponible'
  },
  tipo_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  fecha_registro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false
});

export { Mascota };
