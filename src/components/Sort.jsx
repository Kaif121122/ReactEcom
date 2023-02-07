import React from 'react'
import styled from 'styled-components'
import { FiGrid, FiList } from 'react-icons/all'
import { useFilterGlobalContext } from '../context/FilterContext'


const Wrapper = styled.section`

padding: 0rem 5rem;

.view-icons-container{
  padding: 0.8rem 1rem;
  cursor: pointer;
}

.view-icons{
  color:${({ theme }) => theme.colors.teal_color};
  font-size: 3rem;
}

.active-icon{
  background-color:${({ theme }) => theme.colors.light_Black_color};
}

#sort,option{
  font-size: 1.5rem;
  font-weight:600;
    font-family: 'Montserrat', sans-serif;
}

`


const Sort = () => {

  const { grid_view, setGridView, setListView, filterProducts,shorting } = useFilterGlobalContext();

  return (
    <Wrapper className='sort-container flex justify-between align-center'>
      <div className="view_container flex gap-1">
        <div onClick={setGridView} className={grid_view ? "active-icon view-icons-container" : "view-icons-container"}>
          <FiGrid className='view-icons' /></div>
        <div onClick={setListView} className={!grid_view ? "active-icon view-icons-container" : "view-icons-container"}>
          <FiList className='view-icons' /></div>
      </div>


      <p className="total_items">
        {`${filterProducts.length}`} Product Available
      </p>


      <div className="dropdown_container">
        <form action="#">
        <label htmlFor="sort"></label>
        <select name="sort" id="sort" onClick={shorting}>
        <option value="lowest">Price(lowest)</option>
        <option value="" disabled></option>
        <option value="highest">Price(highest)</option>
        <option value="" disabled></option>
        <option value="a-z">Price(a-z)</option>
        <option value="" disabled></option>
        <option value="z-a">Price(z-a)</option>
        </select>
        </form>
      </div>

    </Wrapper>
  )
}

export default Sort