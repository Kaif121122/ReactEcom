import React from 'react'
import FilterSection from './FilterSection'
import styled from 'styled-components'
import ProductList from './ProductList'
import Sort from './Sort'

const Wrapper = styled.section`

background-color:${({ theme }) => theme.colors.dark_Black_color};
padding: 5rem 2rem;

`

const TotalProducts = () => {

  return (
    <Wrapper className='container'>

      <div className="grid grid-02-1-col">

        <div className="filter-products-container">
          <FilterSection />
        </div>

        <div className="total-products-container">

          <div className="sort-filter">
            <Sort />
          </div>

          <div className="main-product">
            <ProductList />
          </div>

        </div>

      </div>

      
    </Wrapper>
  )
}

export default TotalProducts