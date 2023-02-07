import React from 'react'
import styled from 'styled-components'
import { useFilterGlobalContext } from '../context/FilterContext'
import Sort from './Sort'
import { FaCheck } from "react-icons/all"
import { FormatPrice } from '../helpers/FormatPrice'
import { Button } from "../styles/Button"

const Wrapper = styled.section`


background-color:${({ theme }) => theme.colors.light_Black_color};
padding: 2rem;

.search-input{
  font-size:1.7rem;
  font-weight:500;
  cursor: pointer;
  color:${({ theme }) => theme.colors.teal_color};
    font-family: 'Montserrat', sans-serif;
}

.category-btn,select{
  font-size:2.2rem;
  font-weight:600;
  text-transform:capitalize;
  color:${({ theme }) => theme.colors.teal_color};
background-color:${({ theme }) => theme.colors.light_Black_color};
border: none;
text-align: left;
cursor:pointer;
    font-family: 'Montserrat', sans-serif;
}


.active-category{
  color:orangered;
}

.all-btn{
background-color:${({ theme }) => theme.colors.light_Black_color};
border: none;
text-transform:capitalize;
font-size: 2rem;
font-weight:600;
color:white;
cursor: pointer;
}

.input-range{
  cursor: pointer;
}

`

const FilterSection = () => {



  const { filters: { text, category, colors, price, max_price, min_price }, updateFilterValue, totalProducts, clearFilters } = useFilterGlobalContext();

  const getData = (api, attr) => {
    let newArr = api.map((elem) => {
      return elem[attr]
    });

    if (attr === 'colors') {

      newArr = newArr.flat()
    }

    return (newArr = ["all", ...new Set(newArr)]);


  }


  const categoryData = getData(totalProducts, 'category');
  const companyData = getData(totalProducts, 'company');
  const colorsData = getData(totalProducts, 'colors');

  console.log(colorsData)



  return (
    <Wrapper className='filter-container flex flex-col gap-3'>

      {
        // SEARCH PRODUCTS THROUGH INPUT
      }

      <div className="filter_search">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input type="text" name='text' value={text} onChange={updateFilterValue} className="search-input" placeholder='SEARCH' />
        </form>
      </div>

      {
        // SEARCH PRODUCTS THROUGH CATEGORY
      }


      <div className="category-container flex flex-col gap-2">

        <p>Category</p>

        <div className="categories flex flex-col gap-2">
          {
            categoryData.map((elem, index) => {
              return <button
                key={index}
                type='button'
                name='category'
                value={elem}
                onClick={updateFilterValue}

                className={category === elem ? 'category-btn active-category' : 'category-btn'} >
                {elem}
              </button>
            })
          }
        </div>

      </div>


      {
        // SEARCH PRODUCTS THROUGH COMPANY
      }


      <div className="company-container flex flex-col gap-2">
        <p>Company</p>

        <form action="#">
          <select name="company" id="company"
            onClick={updateFilterValue}>
            {
              companyData.map((elem, index) => {
                return <option
                  key={index}
                  value={elem}
                  className='options'>{elem}</option>
              })

            }
          </select>
        </form>

      </div>

      {
        // SEARCH PRODUCTS THROUGH COLORS
      }

      <div className="colors-container flex flex-col gap-2">
        <p>Colors :</p>
        <div className="colors flex gap-1">
          {
            colorsData.map((elem, index) => {
              if (elem === 'all') {

                return <button key={index}
                  type='button'
                  name='colors'
                  onClick={updateFilterValue}
                  className='all-btn'
                  value={elem}>{elem}
                </button>
              } else {
                return <button key={index}
                  type='button'
                  name='colors'
                  onClick={updateFilterValue}
                  style={{ backgroundColor: elem }}
                  className='color-btn'
                  value={elem}>

                  {colors === elem ? <FaCheck className='selected-icon' /> : null}</button>
              }
            })

          }
        </div>
      </div>


      {
        // SEARCH PRODUCTS THROUGH PRICE
      }

      <div className="price-container">
        <p>Price</p>
        <div className="price-slider flex flex-col gap-1">
          <p><FormatPrice price={price} /></p>
          <input className='input-range' type="range" name="price" value={price} onChange={updateFilterValue}
            min={min_price} max={max_price} />
        </div>
      </div>

      {
        // PRODUCTS CLEAR BUTTON
      }

      <div className="clear-filter ">
        <Button className='warning' onClick={clearFilters}>clear filters</Button>
      </div>

    </Wrapper >
  )
}

export default FilterSection