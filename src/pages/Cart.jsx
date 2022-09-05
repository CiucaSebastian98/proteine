import React from 'react'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Copyright from "../components/Copyright"
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import {mobile} from "../responsive"

const Container =  styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>
        props.type === "filled" ? "black" : "transparnet"};
    color: ${props=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({display: "none"})}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span`

`;

const ProductID = styled.span`

`;

const ProductAroma = styled.span`

`;

const ProductGramaj = styled.span`

`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    cursor: pointer;
    ${mobile({margin: "5px 25px"})}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px"})}
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;


const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;


const SummaryItemText = styled.span`

`;


const SummaryItemPrice = styled.span`

`;


const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>COSUL TAU</Title>
            <Top>
                <TopButton>CONTINUA CUMPARATURILE</TopButton>
                <TopTexts>
                    <TopText>Cos de cumparaturi(2)</TopText>
                    <TopText>Lista ta de dorinte(0)</TopText>
                </TopTexts>
                <TopButton type='filled'>FINALIZEAZA COMANDA</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://i.imgur.com/WdOva0l.png"/>
                            <Details>
                                <ProductName><b>Produs:</b> HydroFue - GymBeam</ProductName>
                                <ProductID><b>ID:</b> 4536789210</ProductID>
                                <ProductAroma><b>Aroma: </b> ciocolata</ProductAroma>
                                <ProductGramaj><b>Gramaj:</b> 2000 g</ProductGramaj>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>257,90 Lei</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://i.imgur.com/E6oSK5H.png"/>
                            <Details>
                                <ProductName><b>Produs:</b> Pink Drive - Beast Pink</ProductName>
                                <ProductID><b>ID:</b> 3487698452</ProductID>
                                <ProductAroma><b>Aroma: </b> pepene</ProductAroma>
                                <ProductGramaj><b>Gramaj:</b> 300 g</ProductGramaj>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>67,90 Lei</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>SUMAR COMANDA</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>325,80 Lei</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Pret transport</SummaryItemText>
                        <SummaryItemPrice>9,99 Lei</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discount cod reduceri: marius5</SummaryItemText>
                        <SummaryItemPrice>-16,78 Lei</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>319 Lei</SummaryItemPrice>
                    </SummaryItem>
                    <Button>COMANDA</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
        <Copyright/>
    </Container>
  )
}

export default Cart