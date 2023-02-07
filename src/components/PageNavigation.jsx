import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.section`

height: 20vh;
font-size: 3rem;
color: ${({ theme }) => theme.colors.grey_color};
background-color:${({ theme }) => theme.colors.light_Black_color};
padding: 5rem;


.page-navig-link{
    
color: ${({ theme }) => theme.colors.teal_color};
}
`

const PageNavigation = ({props}) => {
  return (
    <Wrapper className='flex align-center'>
    <NavLink className='common-link page-navig-link' to='/'>Home</NavLink>/{props}
    </Wrapper>
  )
}

export default PageNavigation