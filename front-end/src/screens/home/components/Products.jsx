import React,{ useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'
// import { popularProducts } from '../data'
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
`
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try{
        const res = await axios.get("http://localhost:3030/api/course/getAll")
        setProducts(res.data)
      }catch(err){
        console.log(err)
      };
    };
    getProducts();
  }, [])

      
  return (
    <Container>
        { products.slice(0,4).map((item) => <Product item={item} key={item.id} />)}
    </Container>
  )
}

export default Products