const BotonCrearCuenta = document.querySelector('.form');
const tokenEnviado = '';
export{tokenEnviado};

BotonCrearCuenta.addEventListener('submit', paginaConfirmación);

function paginaConfirmación(event){
    event.preventDefault();
    // Generar un token aleatorio
const token = Math.floor(100000 + Math.random() * 900000);

// Enviar el token al usuario usando Twilio
client.messages.create({
  body: `Tu token de verificación es: ${token}`,
  to: '+50247013483', // número de teléfono del usuario
  from: '+19876543210' // número de teléfono de Twilio
});

// Guardar el token en el servidor para compararlo más tarde
 tokenEnviado= token.toString();
 
    window.location.replace('../confirmacion.html');
}

