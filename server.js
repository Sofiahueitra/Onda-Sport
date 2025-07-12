const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Ruta para guardar mensajes del formulario de contacto
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

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});