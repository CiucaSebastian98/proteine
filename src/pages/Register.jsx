import styled from "styled-components";
import {mobile} from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
    ),
    url("https://img.freepik.com/premium-photo/healthy-lifestyle-food-sport-concept-white-wooden-background_53476-3765.jpg?w=1380")
    center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    ${mobile({width: "75%"})}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: black;
        color: white;
      }
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREEAZA UN CONT</Title>
            <Form>
                <Input placeholder="nume"/>
                <Input placeholder="prenume"/>
                <Input placeholder="nume utilizator"/>
                <Input placeholder="adresa e-mail"/>
                <Input placeholder="parola"/>
                <Input placeholder="confirma parola"/>
                <Agreement>
                    Daca creezi un cont, esti de acord cu procesarea informatiilor cu caracter personal in concordanta cu <b>politica de confidențialitate</b>.
                </Agreement>
                <Button>CREEAZA</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register