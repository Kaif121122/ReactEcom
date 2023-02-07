import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FormatPrice } from '../helpers/FormatPrice'
import { Button } from '../styles/Button'


const Wrapper = styled.section`

background-color:${({ theme }) => theme.colors.dark_Black_color};
padding: 5rem;

`


const ListView = ({ product }) => {


    return (
        <Wrapper className='list-view flex flex-col gap-1'>
            {
                product.map((elem) => {

                    const { id, name, image, price, description } = elem;

                    return (<div className="list-view-single grid grid-2-col" key={id}>

                        <figure>
                            <img src={image} alt="" className="product-img" />
                        </figure>

                        <div className="list_view_data flex flex-col justify-center gap-1">
                            <h3>{name}</h3>
                            <p><FormatPrice price={price} /></p>
                            <p>{description.slice(0, 90)}...</p>
                            <NavLink to={`/singleproduct/${id}`}>
                            <Button>read more</Button>
                            </NavLink>
                        </div>

                    </div>)
                })
            }

        </Wrapper>
    )
}

export default ListView