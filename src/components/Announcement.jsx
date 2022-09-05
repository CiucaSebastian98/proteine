import styled from "styled-components";
import {mobile} from "../responsive"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight 500;
    background-color: black;
    ${mobile({height:"60px", textAlign: "center"})}
`;

const Announcement = () => {
  return (
    <Container>
        Super Oferta ! Livrare Gratuita la Comenzi de peste 100 RON ! DA, ai auzit bine!
    </Container>
  )
}

export default Announcement