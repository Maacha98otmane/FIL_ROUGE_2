import React from 'react'
import styled from "styled-components";
import CategoryItem from './CategoryItem';
import { categories } from '../data';
import { mobile } from "../responsive";


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`
const Title = styled.h1`
    color: black;
    margin-bottom: 20px;
    margin-left: 20px;
`

const Categories = () => {
  return (
    <>
    <Title>Categories</Title>
    <Container>
        {categories.map(item => (
            <CategoryItem item={item}  key={item.id} />
        ))}
    </Container>
    </>
  )
}

export default Categories