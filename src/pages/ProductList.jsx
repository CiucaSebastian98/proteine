import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import {mobile} from "../responsive"
import { useLocation } from 'react-router-dom';
import { useState } from "react";

const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({width: "0px 20px", display: "flex", flexDirection: "column"})}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: "0px"})}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({marginRight: "10px 0px"})}
`;

const Option = styled.option`

`;

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    console.log(filters);
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>SUPLIMENTE</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter products:</FilterText>
                <Select name = "aroma" onChange={handleFilters}>
                    <Option disabled>
                        Aroma
                    </Option>
                    <Option>Ciocolata</Option>
                    <Option>Vanilie</Option>
                    <Option>Pepene</Option>
                    <Option>Mango & Maracuja</Option>
                    <Option>Capsuni</Option>
                    <Option>Banana</Option>
                    <Option>Fara aroma</Option>
                </Select>
                <Select name = "gramaj" onChange={handleFilters}>
                    <Option disabled>
                        Gramaj
                    </Option>
                    <Option>1000 g</Option>
                    <Option>500 g</Option>
                    <Option>2000 g</Option>
                    <Option>2500 g</Option>
                    <Option>30 g</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort products:</FilterText>
                <Select onChange={e=>setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Cel mai mic pret</Option>
                    <Option value="desc">Cel mai mare pret</Option>
                </Select>
                </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
        <Copyright/>
    </Container>
  )
}

export default ProductList