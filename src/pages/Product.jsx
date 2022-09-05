import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Copyright from '../components/Copyright';
import { Add, Remove } from "@material-ui/icons";
import {mobile} from "../responsive"

const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding: "10px", flexDirection: "column"})}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height:"45vh"})}
`;

const InfoContainer = styled.div`
  margin-top: 150px;
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding:"10px"})}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({width: "100%"})}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterAroma = styled.select`
  cursor: pointer;
  margin-left: 10px;
  padding: 5px;
`;

const FilterAromaOption = styled.option`

`;

const FilterGramaj = styled.select`
  cursor: pointer;
  margin-left: 10px;
  padding: 5px;
`;

const FilterGramajOption = styled.option`

`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width: "100%"})}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: cetner;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
    background-color: black;
    color: white;
  }
`;


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
          <ImgContainer>
            <Image src="https://i.imgur.com/y3RSvc4.png"/>
          </ImgContainer>
          <InfoContainer>
            <Title>Proteine 100% Whey Gold Standard - Optimum Nutrition</Title>
            <Desc>Proteinele 100% Whey Gold Standard sunt cele mai vândute proteine din zer din lume și au câștigat titlul de „proteinele anului” de 11 ori. O porție are un conținut unic de 82% de proteine de înaltă calitate și 5,5 g de BCAA. În plus, au un conținut redus de carbohidrați, zaharuri și grăsimi. Calitatea superioară a produsului este motivul pentru care proteinele 100% Whey Gold Standard sunt considerate regina proteinelor!</Desc>
            <Price>172,90 LEI</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Aroma</FilterTitle>
                <FilterAroma>
                  <FilterAromaOption>Ciocolata</FilterAromaOption>
                  <FilterAromaOption>Vanilie</FilterAromaOption>
                  <FilterAromaOption>Pepene</FilterAromaOption>
                  <FilterAromaOption>Mango & Maracuja</FilterAromaOption>
                  <FilterAromaOption>Capsuni</FilterAromaOption>
                  <FilterAromaOption>Banana</FilterAromaOption>
                  <FilterAromaOption>Fara aroma</FilterAromaOption>
                </FilterAroma>
              </Filter>

              <Filter>
                <FilterTitle>Gramaj</FilterTitle>
                <FilterGramaj>
                  <FilterGramajOption>1000 g</FilterGramajOption>
                  <FilterGramajOption>500 g</FilterGramajOption>
                  <FilterGramajOption>2000 g</FilterGramajOption>
                  <FilterGramajOption>2500 g</FilterGramajOption>
                  <FilterGramajOption>30 g</FilterGramajOption>
                </FilterGramaj>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
              </AmountContainer>
              <Button>ADAUGA IN COS</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
        <Copyright/>
    </Container>
  )
}

export default Product