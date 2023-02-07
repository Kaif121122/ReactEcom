import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import errorImg from '../../public/images/visuals-JpTY4gUviJM-unsplash.jpg'

const Wrapper = styled.section`

padding: 5% 10%;

background-color:${({ theme }) => theme.colors.dark_Black_color};

.error-container{
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
}

.error-img{
    display: block;
 width: 50%;
 margin:0 auto;
}
`

const Error = () => {


    return (
        <Wrapper>
            <div className="container error-container">
                <figure>
                    <img className='error-img' src={errorImg} alt="error-image" />
                </figure>
                <NavLink to='/'><Button>Back to home</Button></NavLink>
            </div>
        </Wrapper>
    )
}

export default Error