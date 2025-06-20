//FUNCION BIENVENIDA
    let nombre = prompt("¡Bienvenido/a! ¿Cómo te llamás?");

    alert("Hola " + nombre + ", gracias por visitar Onda Sport.");

    console.log("Usuario ingresó: " + nombre);

//suscripcion

let respuesta = prompt("¿Deseás suscribirte y recibir noticias de Onda Sport? (si / no)");

    if (respuesta.toLowerCase() === "si") {
        let nombre = prompt("Ingresá tu nombre:");
        let email = prompt("Ingresá tu correo electrónico:");
        alert("¡Gracias por suscribirte, " + nombre + "! Pronto recibirás nuestras novedades.");
        console.log("Nuevo suscriptor: " + nombre + " - " + email);
    } else {
        alert("¡Gracias por visitar Onda Sport!");
        console.log("El usuario no deseó suscribirse.");
    }


/*
    let codigo = prompt("¿Tenés un código de descuento? Ingresalo aquí:");
    if (codigo === "DEPORTES10") {
        alert("¡Felicidades! Tenés un 10% de descuento.");
    } else {
        alert("Código inválido o no ingresado.");
    }
    console.log("Código ingresado: " + codigo);
}
*/