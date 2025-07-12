document.addEventListener('DOMContentLoaded', () => {
  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const mensaje = document.getElementById('mensaje');
  const enviarBtn = document.getElementById('enviar-btn');

  function validarFormulario() {
    const nombreValido = nombre.value.trim() !== '';
    const emailValido = email.value.trim() !== '';
    const mensajeValido = mensaje.value.trim() !== '';

    enviarBtn.disabled = !(nombreValido && emailValido && mensajeValido);
  }

  // Cada vez que el usuario escribe, se verifica
  nombre.addEventListener('input', validarFormulario);
  email.addEventListener('input', validarFormulario);
  mensaje.addEventListener('input', validarFormulario);
});

formulario.addEventListener('submit', function (e) {
    if (enviarBtn.disabled) {
      alert("Por favor, completá todos los campos obligatorios.");
      e.preventDefault();
    } else {
      alert("¡Gracias por su mensaje, pronto lo contactaremos!");
    }
  });
