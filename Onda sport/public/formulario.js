document.addEventListener('DOMContentLoaded', () => {
  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const mensaje = document.getElementById('mensaje');
  const enviarBtn = document.getElementById('enviar-btn');
  const formulario = document.getElementById('contact-form');

  function validarFormulario() {
    const nombreValido = nombre.value.trim() !== '';
    const emailValido = email.value.trim() !== '';
    const mensajeValido = mensaje.value.trim() !== '';

    enviarBtn.disabled = !(nombreValido && emailValido && mensajeValido);
  }

  nombre.addEventListener('input', validarFormulario);
  email.addEventListener('input', validarFormulario);
  mensaje.addEventListener('input', validarFormulario);

  formulario.addEventListener('submit', async function (e) {
    e.preventDefault(); // No recarga

    const datos = {
      nombre: nombre.value,
      email: email.value,
      telefono: telefono.value,
      mensaje: mensaje.value
    };

    try {
      const respuesta = await fetch('/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });

      if (respuesta.ok) {
        alert("¡Gracias por tu mensaje, pronto te contactaremos!");

        // Limpiar formulario
        nombre.value = '';
        email.value = '';
        telefono.value = '';
        mensaje.value = '';
        enviarBtn.disabled = true;
      } else {
        alert("Hubo un error al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Error de conexión.");
    }
  });
});