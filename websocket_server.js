const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');  // Requerido para gestionar las rutas de los archivos

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Servir el archivo index.html en la ruta raíz '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));  // Asegúrate de que index.html esté en el mismo directorio que websocket_server.js
});

// Configurar la conexión de Socket.IO
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');
  socket.emit('message', 'Hola Mundo desde WebSocket/Socket.IO!');
});

// Iniciar el servidor en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
