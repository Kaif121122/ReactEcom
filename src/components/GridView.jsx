import React from 'react'
import styled from 'styled-components'
import Product from './Product'


const Wrapper = styled.section`

background-color:${({ theme }) => theme.colors.dark_Black_color};
padding: 5rem 0;

`

 

const GridView = ({ product }) => {
  
  return (
    <Wrapper>
      <div className="grid-view grid grid-3-col gap-2">
        {
          
          product.map((elem) => {
            
            return (<Product key={elem.id} {...elem} />)
          })
        }
        
      </div>
      
    </Wrapper>
  )
}

export default GridView