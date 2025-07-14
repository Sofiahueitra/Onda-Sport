const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger para ver las peticiones
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Servir archivos estáticos de la carpeta public
app.use(express.static("public"));

// Ruta base: mostrar contacto.html al abrir la raíz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contacto.html'));
});

// Ruta para guardar mensajes del formulario
app.post('/contacto', (req, res) => {
  const nuevoMensaje = req.body;

  const archivoPath = path.join(__dirname, 'mensajes.json');
  let mensajes = [];

  if (fs.existsSync(archivoPath)) {
    const data = fs.readFileSync(archivoPath);
    mensajes = JSON.parse(data);
  }

  mensajes.push(nuevoMensaje);

  fs.writeFileSync(archivoPath, JSON.stringify(mensajes, null, 2));

  res.send("Mensaje enviado correctamente. ¡Gracias por contactarte!");
});


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});