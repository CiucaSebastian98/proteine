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
    width: 25%;
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
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:hover{
        background-color: black;
        color: white;
      }
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
            <Wrapper>
                <Title>AUTENTIFICA-TE</Title>
                <Form>
                    <Input placeholder="nume utilizator"/>
                    <Input placeholder="parola"/>
                    <Button>LOGIN</Button>
                    <Link>AM UITAT PAROLA CONTULUI</Link>
                    <Link>CREEAZA UN CONT NOU</Link>
                </Form>
            </Wrapper>
        </Container>
  )
}

export default Login