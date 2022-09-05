import styled from "styled-components"
import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, EmailOutlined } from '@material-ui/icons'
import {mobile} from "../responsive"

const Container = styled.div`
    display: flex;
    background-color: black;
    ${mobile({flexDirection:"column"})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: white;
`;

const Logo = styled.h1`

`;

const Description = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    transition: all 0.5s ease;
    &:hover{
        transform: scale(1.5);
    }
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    color: white;
    ${mobile({backgroundColor:"#fff8f8"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    color: white;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 40%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>DOAPE.</Logo>
            <Description>Suntem un magazin online cu suplimente nutritive pentru sportivi, servicii superioare și prețuri avantajoase.</Description>
            <SocialContainer>
                <SocialIcon color="white">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="white">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="white">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="white">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Link-uri Utile</Title>
            <List>
                <ListItem>Acasa</ListItem>
                <ListItem>Cos cumparaturi</ListItem>
                <ListItem>Nutritie Sportiva</ListItem>
                <ListItem>Alimente Sanatoase</ListItem>
                <ListItem>Imbracaminte Fitness</ListItem>
                <ListItem>Contul Meu</ListItem>
                <ListItem>Urmarire Comanda</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Termeni</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight: "10px"}}/>Str. Borșului, Nr. 56A, 410605 Oradea, România</ContactItem>
            <ContactItem><Phone style={{marginRight: "10px"}}/>0040 316 302 838</ContactItem>
            <ContactItem><EmailOutlined style={{marginRight: "10px"}}/>info@gymbeam.ro</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer