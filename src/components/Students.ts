import { Link } from 'react-router-dom';
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 2em;
  margin-left: 3%; 
`;

interface StudentProps {
    selected?: boolean;
}

export const Student = styled.div<StudentProps>`
width: 23vw;
height: 78vh;
margin-top: 2%;
margin-left: 33%;
list-style: none;
padding: 1.5%;
border: 1px solid #ccc;
text-align: center;
background-color: ${(props) => (props.selected ? '#eee' : 'transparent')};
`

export const ImageStudent = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Content = styled.div``;

export const NameStudent = styled.h2`
  margin-top: 2%;
  font-size: 2em;
`;

export const Description = styled.p`
  color: black;
  display: flex;
  margin-top: 1em;
  margin-left: 16%;
  font-size: 1.3em;

  ul {
    list-style: none;
  }
  
`;


