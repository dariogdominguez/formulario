export function allLetter(inputtxt)
{
const letters = /^[A-Za-zñÑ\s]+$/;
if(inputtxt.match(letters))
{
return true;
}
else{
return false;
}}

export function allnumeric(inputtxt)
{
let numbers = /^[0-9]+$/;
if(inputtxt.match(numbers))
{
return true;
}
else{
return false;
}}
function isValidDate(date) {
    const temp = date.split('/');
    const day = Number(temp[0]);
    const month = Number(temp[1]) - 1; // Resta 1 para que sea compatible con getMonth()
    const year = Number(temp[2]);
    
    // Validación básica de año, mes y día
    if (year < 1000 || year > 9999 || month < 0 || month > 11 || day < 1) {
        return false;
    }
    
    const d = new Date(year, month, day);

    // Verifica que el objeto Date sea válido y que coincida con los componentes de la fecha
    return (
        d.getFullYear() === year &&
        d.getMonth() === month &&
        d.getDate() === day
    );
}

function CheckPassword(inputtxt) 
{ 
let passw=  /^[A-Za-z]\w{7,14}$/;
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
