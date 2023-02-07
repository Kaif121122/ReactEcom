import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'

const Wrapper = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
height: 10rem;
padding:0 5rem;
background-color:${({theme})=>theme.colors.dark_Black_color};

.logo{
    color:white;
    font-size:5rem;
    font-weight:700;
}

`

const Header = () => {
  return (
<Wrapper className='container'>

<div className="logo-container">
<NavLink className='common-link' to="/"><h2 className="logo"> {`< />`} </h2> </NavLink>
</div>

<div className="nav-container">
<Navbar/>
</div>

</Wrapper>
  )
}

export default Header