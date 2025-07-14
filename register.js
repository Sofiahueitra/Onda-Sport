const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // para servir HTML/CSS/JS

// Ruta POST para recibir registro de usuario
app.post('/registrar', (req, res) => {
  const nuevoUsuario = req.body;

  // Leer archivo actual (si existe)
  const archivoPath = path.join(__dirname, 'usuarios.json');
  let usuarios = [];

  if (fs.existsSync(archivoPath)) {
    const data = fs.readFileSync(archivoPath);
    usuarios = JSON.parse(data);
  }

  usuarios.push(nuevoUsuario); // Agregar nuevo usuario

  // Guardar en archivo
  fs.writeFileSync(archivoPath, JSON.stringify(usuarios, null, 2));
  
  res.json({ mensaje: "Usuario registrado correctamente" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});