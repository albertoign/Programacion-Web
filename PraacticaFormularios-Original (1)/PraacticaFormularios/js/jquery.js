$(document).ready(function () {
    $("#form").submit(function (e) {
        e.preventDefault();
        var nombre = $("#name").val();
        var correo = $("#email").val();
        var clave = $("#password").val();

        let msjmostrar = "";
        let entrar = false;

        if(nombre.trim().length < 4 || nombre.trim().length > 10){
            msjmostrar += "El nombre debe tener entre 4 y 10 caracteres";
            entrar = true;
        }

        if(nombre == "Victor"){
            msjmostrar += "<br>El nombre no puede ser Victor";
            entrar = true;
        }

        var letra = nombre.trim().charAt(0);
        if(!esMayuscula(letra)){
            msjmostrar += "<br>La primera letra debe ser mayúscula";
            entrar = true;
        }

        if(entrar){
            $("#warnings").html(msjmostrar);
        }
        else{
            $("#warnings").html("Enviado");
        }



    });

    function esMayuscula(letra){
        if(letra == letra.toUpperCase()){
            return true;
        }
        else{
            return false;
        }
    }
});

