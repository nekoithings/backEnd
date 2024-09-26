import { DataTypes } from 'sequelize';
import { db } from '../database/conexion.js';

const SolicitudAdopcion = db.define('solicitudes_adopcion', {
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  mascota_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha_solicitud: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  estado: {
    type: DataTypes.ENUM('Pendiente', 'Aprobada', 'Rechazada'),
    defaultValue: 'Pendiente'
  },
  comentarios: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  timestamps: false
});

export { SolicitudAdopcion };
