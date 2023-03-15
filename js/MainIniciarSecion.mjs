const BotonAccesar = document.querySelector('.form');

console.log('hello')

BotonAccesar.addEventListener('submit', paginaInicio);

function paginaInicio(event){
    event.preventDefault();
    window.location.replace('../pagina_d_inicio_usuario.html');
    console.log('Funciona?');
}