const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
      origin: '*',
    },
  });
app.use(cors());

app.use(express.json());

io.on("connection", (socket) => {
  console.log("Usuario conectado:", socket.id);

  socket.on("disconnect", () => {
    console.log("Usuario desconectado:", socket.id);
  });

  // Manejar mensajes desde Laravel
  socket.on("mensaje", (data) => {
    console.log(`Mensaje recibido desde Laravel: ${data.mensaje}`);
    // Puedes hacer algo con el mensaje aquí
  });

  // Manejar eventos de notificación desde Laravel
  socket.on("notificacion", (data) => {
    console.log("Evento de notificación recibido:", data);
    // Aquí, puedes hacer lo que necesites con la notificación recibida desde Laravel
    // Por ejemplo, puedes emitir un mensaje a todos los clientes conectados
    io.emit("mensaje", {
      mensaje: "Nueva notificación recibida desde Laravel",
    });
  });
});

// Ruta para manejar las notificaciones directas desde Laravel
app.post("/mensaje", (req, res) => {
  console.log("Notificación directa desde Laravel:", req.body);
  // Puedes hacer algo con la notificación directa aquí
  res.status(200).send("Notificación recibida en el servidor Node.js");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${PORT}`);
});
