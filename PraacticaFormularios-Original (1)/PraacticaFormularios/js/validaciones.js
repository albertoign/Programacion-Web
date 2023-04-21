var nombre = document.getElementById("name");
var correo = document.getElementById("email");
var clave = document.getElementById("password");
//Obtenemos lo escrito en el formulario y lo guardamos
//en variables de programación

const form1 = document.getElementById("form");
var msj = document.getElementById("warnings");

form1.addEventListener("submit", e =>{
    e.preventDefault();
    let msjmostrar = "";
    let entrar = false;

    if(nombre.value.length < 4 || nombre.value.length > 10){
        msjmostrar = msjmostrar + 'El nombre debe tener entre 4 y 10 caracteres';
        entrar = true;
    }
    if(nombre.value == "Victor"){
        msjmostrar += '<br>Su nombre no puede ser Victor';
        entrar = true;
    }

    var letra = nombre.value.charAt(0);
    if(esMayuscula){
        msjmostrar += '<br>Su nombre debe iniciar con mayúscula';
        entrar = true;
    }

    if(entrar){

        msj.innerHTML = msjmostrar;
    }
    else{
        msj.innerHTML = "Enviado";
    }
}

);



function esMayuscula(letra){
    return letra == letra.toUpperCase();
}