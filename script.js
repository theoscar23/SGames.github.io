document.getElementById("btn__registrarse").addEventListener("click",register)
document.getElementById("btn_iniciar_sesion").addEventListener("click",register)


var contenedor__login_register= document.querySelector(".contenedor__login_register");
var formulario_login= document.querySelector(".formulario__login");
var formulario_register= document.querySelector(".formulario__register");
var caja_trasera_login= document.querySelector(".caja_trasera__login");
var caja_trasera_register= document.querySelector(".caja_trasera__register");


function anchopagina(){
    if(window.innerWidth > 991){
        caja_trasera_login.style.display="block";
        caja_trasera_register.style.display="block";
    }else{
        caja_trasera_register.style.display="block";
        caja_trasera_registera.style.opacity="1";
        caja_trasera_login.style.display="none";
        formulario_login.style.display="block";
        formulario_register.style.display="none";
        contenedor__login_register.style.left="10px";
    }
}

anchopagina()

function IniciarSesion(){

    if(window.innerWidth > 991){
    formulario_register.style.diplay = "none"
    contenedor__login_register.style.left="10px";
    formulario_login.style.display="none";
    caja_trasera_register.style.opacity="1";
    caja_trasera_register.style.opacity="0";        
    }else
    {
    formulario_register.style.diplay = "none"
    contenedor__login_register.style.left="0px";
    formulario_login.style.display="none";
    caja_trasera_register.style.display="block";
    caja_trasera_register.style.display="none";  
    }

}

function register(){
    if(window.innerWidth > 991){
        formulario_register.style.diplay = "block"
        contenedor__login_register.style.left="410px";
        formulario_login.style.display="none";
        caja_trasera_register.style.opacity="0";
        caja_trasera_register.style.opacity="1";    
        }else
        {
            formulario_register.style.diplay = "block"
            contenedor__login_register.style.left="0px";
            formulario_login.style.display="none";
            caja_trasera_register.style.display="none";
            caja_trasera_register.style.display="block";
            caja_trasera_login.style.opacity="1";
        }
    

}