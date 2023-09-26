import styled from "styled-components"

const Article = styled.article`
width:  ${(props) => (props.primary ? "100%" : "45%")};;
height: 65vh;
background-color: ${(props) => (props.primary ? "100%" : "45%")};
margin-right:10% ;


`;

export default Article;
