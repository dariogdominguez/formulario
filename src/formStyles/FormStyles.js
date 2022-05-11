import styled from "styled-components";

export const MainContainer = styled.div`
height: 100vh;
width: 100vw;
background: #8b8b8c;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(12, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
overflow: scroll;
margin: 0px;
padding: 20px;
`

export const TitleContainer = styled.div`
grid-area: 1 / 2 / 2 / 4;
text-align: center;
`

export const FormContainer = styled.div`
grid-area: 2 / 2 / 14 / 4;
background-color: rgb(166, 166, 166, 0.3);
border-radius: 15px;
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
padding: 50px;
align-items:center;
height: max-content;
`

export const StyledLabel = styled.label`
color: black;
font-size: large;
font-weight: bold;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
margin: 5px;
margin-bottom: 15px;
`
export const StyledInputTwo = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  margin-bottom: 1em;
  background: papayawhip;
  border: none;
  border-radius: 5px;
`

export const StyledButton = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid papayawhip;
  border-radius: 3px;
  :hover{
      background-color: gray;
      cursor: pointer;
  }
  :disabled,
button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
`

export const StyledP = styled.p`
background-color: rgb(255, 77, 77);
margin:5px;
text-decoration: solid;
color: black;
font-size: large;
font-weight: bold;
`

export const StyledTextArea = styled.textarea`
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 5px;
`