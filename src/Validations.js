export function allLetter(inputtxt)
{
var letters = /^[A-Za-z]+$/;
if(inputtxt.match(letters))
{
return true;
}
else{
return false;
}}

export function allnumeric(inputtxt)
{
var numbers = /^[0-9]+$/;
if(inputtxt.match(numbers))
{
return true;
}
else{
return false;
}}
function isValidDate(date) {
    var temp = date.split('/');
    var d = new Date(temp[2] + '/' + temp[1] + '/' + temp[0]);
    return (d && (d.getMonth() + 1) == temp[1] && d.getDate() == Number(temp[0]) && d.getFullYear() == Number(temp[2]));
}

function CheckPassword(inputtxt) 
{ 
var passw=  /^[A-Za-z]\w{7,14}$/;
if(inputtxt.match(passw)) 
{ 
return true;
}
else
{ 
return false;
}
}


export const validate = (nombre, apellido, fecha, contraseña, calle, altura, sexo) =>{

    if(nombre)if(!allLetter(nombre)){
        return "Nombre solo acepta letras"
    }
    if(apellido)if(!allLetter(apellido)){
        return "Apellido solo acepta letras"
    }
    if(fecha)if(!isValidDate(fecha)){
        return "El formato de la fecha es incorrecto"
    }
    if(contraseña)if(!CheckPassword(contraseña)){
        return "La contraseña debe contener al menos una mayuscula y un simbolo"
    }
    if(calle)if(!allLetter(calle)){
        return "Calle solo acepta letras"
    }
    if(altura)if(!allnumeric(altura)){
        return "Altura solo acepta numeros"
    }
    if(nombre && apellido && fecha && contraseña && calle && altura && sexo){
        return undefined;
    }else{
        return ("Faltan campos obligatorios por completar")
    }
}
