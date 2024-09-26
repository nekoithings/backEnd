import express from 'express';
import cors from 'cors';
import { db } from './database/conexion.js';
import { routerMascotas } from './rutas/mascotasRouter.js';
import { routerSolicitudes } from './rutas/solicitudesRouter.js';
import { routerTiposMascotas } from './rutas/tiposMascotaRouter.js';
import { routerUsuarios } from './rutas/usuariosRouter.js'; 

// Crear instancia de Express
const app = express();

// Habilitar CORS y JSON
app.use(cors());
app.use(express.json());

// Verificar conexión con la base de datos
db.authenticate()
  .then(() => console.log('Conexión a la base de datos correcta'))
  .catch(err => console.log(`Error en la conexión a la base de datos: ${err}`));

// Definir ruta principal
app.get('/', (req, res) => {
  res.send('¡Bienvenido a Pet Craze! Somos una empresa dedicada a conectar mascotas con hogares amorosos. Nuestra pasión es ayudar a que encuentres tu compañero perfecto, ya sea un perro, gato u otra mascota que llene tu vida de alegría. ¡Únete a la locura por las mascotas y adopta hoy!');
});

// Usar rutas de mascotas
app.use('/mascotas', routerMascotas);

// Usar rutas de solicitudes de adopción
app.use('/solicitudes', routerSolicitudes);

// Usar rutas de tipos de mascotas
app.use('/tipos-mascotas', routerTiposMascotas);

// Usar rutas de usuarios
app.use('/usuarios', routerUsuarios); // Aquí montas el router de usuarios

// Puerto del servidor
const PORT = process.env.PORT || 4000;

// Sincronizar la base de datos y arrancar el servidor
db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => console.log(`Error al sincronizar la base de datos: ${err}`));
