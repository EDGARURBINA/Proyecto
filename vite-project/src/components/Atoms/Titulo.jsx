
import styled from "styled-components";

const Titulo= styled.h1 `
color: ${(props) => (props.primary ? "black" : "white")};

flex: 1;
  text-align: ${(props) => (props.primary ? "justify" : "center " )}; 
  margin-left : ${(props) => (props.primary ? "100px " : "0px " )}; 
 
;
  



`;



export default Titulo;
