import styled from "styled-components";

function Imagen({ src, alt, primary, secondary,  tercery }) {
  return <StyledImage src={src} alt={alt} primary={primary} secondary={secondary} tercery={tercery} />;
}

const StyledImage = styled.img`
  width: ${(props) => (props.primary ? "6%" : props.secondary ? "40%" :props.tercery?"40%": "100%")};
  height: ${(props) => (props.primary ? "10vh" : props.secondary ? "40vh" : props.tercery? "70vh": "40vh")};
  margin: ${(props) => (props.primary ? "0" : props.secondary ? "3% 5%" : "")};
  object-fit: ${(props) => (props.primary ? "cover" : props.secondary ? "cover" :props.tercery? "": "")} ;
`;

export default Imagen;