import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../styles/Button'

const Wrapper = styled.section`
background-color:${({ theme }) => theme.colors.dark_Black_color};
padding: 5rem;

.left-container{
    gap: 3rem;
}

.hero-para{
  font-size: 2.5rem;
  line-height:4rem;
}

.hero-img{
    max-width: 100%;
    height: auto;
}

`

const HeroSection = ({ props }) => {

  return (
    <Wrapper className='container'>
      <div className="grid grid-2-hero-col">
        <div className="left-container flex flex-col justify-center">
          <h1 className="main-heading">
            {props.title}
          </h1>
          <p className="common-para hero-para">
            {props.para}
          </p>
          <NavLink to='/products'><Button>Shop Now</Button></NavLink>
        </div>
        <div className="right-container">
          <figure>
            <img src={props.img} alt="" className="hero-img" />
          </figure>
        </div>

      </div>
    </Wrapper>
  )
}

export default HeroSection