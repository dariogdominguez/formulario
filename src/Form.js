import { useState } from "react";
import { MainContainer, FormContainer, TitleContainer,
        StyledLabel, StyledInputTwo, StyledButton, StyledP, StyledTextArea} from "./formStyles/FormStyles";
import {validate} from './Validations';


export default function Formulario (){
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("");
    const [fecha, setFecha] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [sexo, setSexo] = useState("")
    const [calle, setCalle] = useState("");
    const [altura, setAltura] = useState("");
    const [recomendar, setRecomendar] = useState("");
    const [elegirnos, setElegirnos] = useState("");
    const [mejorar, setMejorar] = useState("");
    const [comparacion, setComparacion] =useState("");
    const [comentarios, setComentarios] = useState("")
    const [nuevaEncuesta, setNuevaEncuesta] = useState("");

    const errorMessage = validate(nombre, apellido, fecha, contraseña, calle, altura, sexo)

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
                validate(nombre, apellido, fecha, contraseña, sexo, calle, altura);
                let encuesta ={
                    nombre,
                    apellido,
                    calle,
                    altura,
                    fecha,
                    contraseña,
                    sexo,
                    recomendar,
                    mejorar,
                    comparacion,
                    comentarios,
                    nuevaEncuesta
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
                    value = {nombre}
                    onChange ={ e => setNombre(e.target.value)
                    }></StyledInputTwo></td>
                    </tr>
                    <tr>
                    <td><StyledLabel >Apellido:</StyledLabel></td>
                    <td><StyledInputTwo  
                    type = "text"
                    name = "apellido"
                    placeholder ="Apellido"
                    autoComplete = "off"
                    value = {apellido}
                    onChange ={ e => setApellido(e.target.value)}
                    ></StyledInputTwo></td>
                    </tr>
                    <tr>
                    <td><StyledLabel >Fecha de nacimiento:</StyledLabel></td>
                    <td><StyledInputTwo                     
                    type = "text"
                    name = "fecha"
                    placeholder="Fecha de nacimiento"
                    autoComplete = "off"
                    value = {fecha}
                    onChange ={ e => setFecha(e.target.value)}></StyledInputTwo></td>
                    </tr>
                    <tr>
                    <td><StyledLabel >Contraseña:</StyledLabel></td>
                    <td><StyledInputTwo                     
                    type = "password"
                    name = "contraseña"
                    placeholder="Contraseña"
                    autoComplete = "off"
                    value = {contraseña}
                    onChange ={ e => setContraseña(e.target.value)}></StyledInputTwo></td>
                    </tr>
                    <tr>
                    <td><StyledLabel >Calle:</StyledLabel></td>
                    <td><StyledInputTwo 
                    type = "text"
                    nombre = "calle"
                    placeholder ="calle"
                    autoComplete = "off"
                    value = {calle}
                    onChange ={ e => setCalle(e.target.value)
                    }></StyledInputTwo></td>
                    </tr>
                    <tr>
                    <td><StyledLabel >altura:</StyledLabel></td>
                    <td><StyledInputTwo 
                    type = "text"
                    nombre = "altura"
                    placeholder ="altura"
                    autoComplete = "off"
                    value = {altura}
                    onChange ={ e => setAltura(e.target.value)
                    }></StyledInputTwo></td></tr>
                    <tr>
                    <td><StyledLabel >Sexo:</StyledLabel></td>
                    <td>
                    <StyledInputTwo  type={"radio"} name={"sexo"} value={"Masculino"} onChange={e => setSexo(e.target.value)}></StyledInputTwo>Masculino
                    <StyledInputTwo  type={"radio"} name={"sexo"} value={"Femenino"} onChange={e => setSexo(e.target.value)}></StyledInputTwo>Femenino
                    <StyledInputTwo  type={"radio"} name={"sexo"} value={"Otro"} onChange={e => setSexo(e.target.value)}></StyledInputTwo>Otro
                    </td>
                    </tr>
                    <br/>
                    <StyledLabel>Por cual de las siguientes opciones, cree usted que elige nuestros servicios?</StyledLabel>(puede elegir más de una)
                    <br></br>
                    <StyledInputTwo  type={"checkbox"} value={"Nuestros precios"} onChange={e => setElegirnos(elegirnos.concat(e.target.value).concat(", "))}></StyledInputTwo>Nuestros precios
                    <StyledInputTwo  type={"checkbox"} value={"Calidad del servicio"} onChange={e => setElegirnos(elegirnos.concat(e.target.value).concat(", "))}></StyledInputTwo>Calidad del servicio
                    <StyledInputTwo  type={"checkbox"} value={"Promociones y beneficios"} onChange={e => setElegirnos(elegirnos.concat(e.target.value))}></StyledInputTwo>Promociones y beneficios
                    <br></br>
                    <StyledLabel>Que tan probable es que nos recomiende a familiares o amigos?</StyledLabel>
                    <br></br>
                    <StyledInputTwo  type={"radio"} name={"recomendar"} value={"Muy poco probable"} onChange={e => setRecomendar(e.target.value)}></StyledInputTwo>Muy poco probable
                    <StyledInputTwo  type={"radio"} name={"recomendar"} value={"Probable"} onChange={e => setRecomendar(e.target.value)}></StyledInputTwo>probable
                    <StyledInputTwo  type={"radio"} name={"recomendar"} value={"Muy probable"} onChange={e => setRecomendar(e.target.value)}></StyledInputTwo>Muy probable
                    <br></br>
                    <StyledLabel>¿Cómo podemos mejorar tu experiencia con nuestro servicio?</StyledLabel>
                    <br></br>
                    <StyledTextArea name="mejorar" placeholder={"Escribe aquí tu respuesta"} rows="3" cols="70"
                    onChange={e => setMejorar(e.target.value)}></StyledTextArea>
                    <br></br>
                    <StyledLabel>¿Por qué elegiste nuestro servicio sobre el de la competencia?</StyledLabel>
                    <br></br>
                    <StyledTextArea name="comparacion" placeholder={"Escribe aquí tu respuesta"} rows="3" cols="70"
                    onChange={e => setComparacion(e.target.value)}></StyledTextArea>
                    <br></br>
                    <StyledLabel>¿Tiene algún otro comentario o sugerencia para nosotros?</StyledLabel>
                    <br></br>
                    <StyledTextArea name="comentarios" placeholder={"Escribe aquí tu respuesta"} rows="3" cols="70"
                    onChange={e => setComentarios(e.target.value)}></StyledTextArea>
                    <br></br>
                    <StyledLabel>En el futuro, ¿estarías dispuesto a volver a realizar esta encuesta?</StyledLabel>
                    <br></br>
                    <StyledTextArea name="nuevaEncuesta" placeholder={"Escribe aquí tu respuesta"} rows="3" cols="70"
                    onChange={e => setNuevaEncuesta(e.target.value)}></StyledTextArea>
                    <br></br>
                <StyledP >{errorMessage}</StyledP>
                <StyledButton  type="submit" disabled={errorMessage}>Enviar</StyledButton>
                </form>
            </FormContainer>
            </MainContainer>
        </div>
    )

}