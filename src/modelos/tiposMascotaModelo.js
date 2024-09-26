import { DataTypes } from 'sequelize';
import { db } from '../database/conexion.js';

const TipoMascota = db.define('tipos_mascotas', {
  nombre_tipo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  timestamps: false
});

export { TipoMascota };
