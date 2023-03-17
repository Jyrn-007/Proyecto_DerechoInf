//variables
const BotonAccesar = document.querySelector('.form');
const Usuario = document.querySelector('.usuario');
const alerta = document.querySelector('.alert')

//Funcion de botones
BotonAccesar.addEventListener('submit', paginaInicio);

//Funcion del boton Accesar
function paginaInicio(event){
    event.preventDefault();
    if(Usuario.value == "mario"){
        window.location.replace('../pagina_d_inicio_usuario.html');
    }    
    else{
        alerta.classList.toggle('inactive');
    }
}