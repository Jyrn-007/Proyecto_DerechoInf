const IngresoToken = document.querySelector('.tokenUsuario');
const BotonIngresar = document.querySelector('.form');
const alert = document.querySelector('.alert');
import{TokenUsuario} from './mainRegistrate.mjs';

BotonIngresar.addEventListener('submit', ingresar);

function ingresar(event){
    event.preventDefault();
    fetch('/validar-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: IngresoToken })
      })
      .then(response => response.json())
      .then(data => {
        // Manejar la respuesta del servidor
        if (data.valid) {
          console.log('Token válido');
        } else {
          console.log('Token inválido');
        }
      });
      if (IngresoToken === TokenUsuario) {
        res.json({ valid: true });
        window.location.replace('../pagina_d_inicio_usuario.html');
      } else {
        res.json({ valid: false });
        alerta.classList.toggle('inactive');
      }
}
