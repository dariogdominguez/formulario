import { useState } from "react";
import { MainContainer, FormContainer, TitleContainer,
        StyledLabel, StyledInputTwo, StyledButton, StyledP, StyledTextArea} from "./formStyles/FormStyles";
import {validate} from './Validations';


export default function Formulario (){
    const [datos, setDatos] = useState({
        nombre: "",
        apellido: "",
        fecha: "",
        contraseña: "",
        calle: "",
        altura: "",
        sexo: "",
        mejorar: ""
        });
    console.log(datos);

    const errorMessage = validate(datos.nombre, datos.apellido, datos.fecha, datos.contraseña, datos.calle, datos.altura, datos.sexo)

    return(
        <div>
            <MainContainer >
            <TitleContainer >
            <h1>Encuesta de satisfacción</h1>
            <p>por favor, complete los siguientes datos</p>
            </TitleContainer>
            <FormContainer >
                <form onSubmit={e => {
                e.preventDefault()
                validate(datos.nombre, datos.apellido, datos.fecha, datos.contraseña, datos.calle, datos.altura, datos.sexo);
                let encuesta ={
                    datos
                }
                console.log(encuesta);
                }}>
                    <tr>
                    <td><StyledLabel >Nombre:</StyledLabel></td>
                    <td><StyledInputTwo 
                    type = "text"
                    nombre = "nombre"
                    placeholder ="Nombre"
                    autoComplete = "off"
                    onChange ={ e => setDatos({ ...datos, nombre: e.target.value })
                    }></StyledInputTwo></td>
                    </tr>
                    <tr>
                    <td><StyledLabel >Apellido:</StyledLabel></td>
                    <td><StyledInputTwo  
                    type = "text"
                    name = "apellido"
                    placeholder ="Apellido"
                    autoComplete = "off"
                    value = {datos.apellido}
                    onChange ={ e => setDatos({ ...datos, apellido: e.target.value })}
                    ></StyledInputTwo></td>
                    </tr>
                    <tr>
                    <td><StyledLabel >Fecha de nacimiento:</StyledLabel></td>
                    <td><StyledInputTwo                     
                    type = "text"
                    name = "fecha"
                    placeholder="Fecha de nacimiento"
                    autoComplete = "off"
                    value = {datos.fecha}
                    onChange ={ e => setDatos({ ...datos, fecha: e.target.value })}></StyledInputTwo></td>
                    </tr>
                    <tr>
                    <td><StyledLabel >Contraseña:</StyledLabel></td>
                    <td><StyledInputTwo                     
                    type = "password"
                    name = "contraseña"
                    placeholder="Contraseña"
                    autoComplete = "off"
                    value = {datos.contraseña}
                    onChange ={ e => setDatos({ ...datos, contraseña: e.target.value })}></StyledInputTwo></td>
                    </tr>
                    <tr>
                    <td><StyledLabel >Calle:</StyledLabel></td>
                    <td><StyledInputTwo 
                    type = "text"
                    nombre = "calle"
                    placeholder ="calle"
                    autoComplete = "off"
                    value = {datos.calle}
                    onChange ={ e => setDatos({ ...datos, calle: e.target.value })
                    }></StyledInputTwo></td>
                    </tr>
                    <tr>
                    <td><StyledLabel >altura:</StyledLabel></td>
                    <td><StyledInputTwo 
                    type = "text"
                    nombre = "altura"
                    placeholder ="altura"
                    autoComplete = "off"
                    value = {datos.altura}
                    onChange ={ e => setDatos({ ...datos, altura: e.target.value })
                    }></StyledInputTwo></td></tr>
                    <tr>
                    <td><StyledLabel >Sexo:</StyledLabel></td>
                    <td>
                    <StyledInputTwo  type={"radio"} name={"sexo"} value={"Masculino"} onChange={e => setDatos({ ...datos, sexo: e.target.value })}></StyledInputTwo>Masculino
                    <StyledInputTwo  type={"radio"} name={"sexo"} value={"Femenino"} onChange={e => setDatos({ ...datos, sexo: e.target.value })}></StyledInputTwo>Femenino
                    <StyledInputTwo  type={"radio"} name={"sexo"} value={"Otro"} onChange={e => setDatos({ ...datos, sexo: e.target.value })}></StyledInputTwo>Otro
                    </td>
                    </tr>
                    <br/>
                    <StyledLabel>¿Cómo podemos mejorar tu experiencia con nuestro servicio?</StyledLabel>
                    <br></br>
                    <StyledTextArea name="mejorar" placeholder={"Escribe aquí tu respuesta"} rows="3" cols="70"
                    onChange={e => setDatos({ ...datos, mejorar: e.target.value })}></StyledTextArea>
                    <br></br>
                <StyledP >{errorMessage}</StyledP>
                <StyledButton  type="submit" disabled={errorMessage}>Enviar</StyledButton>
                </form>
            </FormContainer>
            </MainContainer>
        </div>
    )

}