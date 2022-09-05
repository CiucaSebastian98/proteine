import styled from "styled-components";

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    text-align: center;
    cursor:pointer;
    transition: all 0.5s ease;
    &:hover{
        transform: scale(0.9);
    }
    a:link {
        color: black;
        background-color: transparent;
        text-decoration: none;
      }
      a:visited {
        color: black;
        background-color: transparent;
        text-decoration: none;
      }
      a:hover {
        color: black;
        background-color: transparent;
        text-decoration: none;
      }
      a:active {
        color: yellow;
        background-color: transparent;
        text-decoration: none;
      }
`;

const Copyright = () => {
  return (
    <Container>
        <Wrapper>
            © Copyright - <b><a href="https://www.facebook.com/sebastian.mihai.ciuca/">ing. Ciuca Sebastian Mihai</a></b>
        </Wrapper>
    </Container>
  )
}

export default Copyright