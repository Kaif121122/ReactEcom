import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { FormatPrice } from '../helpers/FormatPrice';

const Wrapper = styled.section`




.caption{
    font-size: 2rem;
    color:${({ theme }) => theme.colors.dark_Black_color};
    background-color:${({ theme }) => theme.colors.grey_color};
    position: absolute;
    top: 3rem;
    right: 2rem;
    border-radius:1rem;
    padding: 0.5rem 1rem;
}

`

const Product = (elem) => {
    const { id, name, price, image, category } = elem;
    return (
        <NavLink className="common-link" to={`/singleproduct/${id}`}>
            <Wrapper className='card flex flex-col gap-1'>
                <figure>
                    <img src={image} alt={name} className="product-img" />
                    <figcaption className='caption'>{category}</figcaption>
                </figure>
                <div className="card-data flex justify-between">
                    <p className="product-name">{name}</p>
                    <p className="product-price"><FormatPrice price={price}/></p>
                </div>
            </Wrapper>
        </NavLink>
    )
}

export default Product