import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { RiShoppingCartLine } from 'react-icons/all'
import { useCartGlobal } from '../context/CartContext'
import { CgMenu, CgCloseR } from 'react-icons/all'
import { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '../styles/Button'

const Wrapper = styled.section`

.nav-ul{
    gap: 4rem;
}

.nav-li{
  list-style: none;

 .nav-link{
    font-size:2.5rem;
    font-weight:500;
    color: ${({ theme }) => theme.colors.teal_color};
    padding: 1rem 0;
    position: relative;
 }
 &:hover{
    opacity: 0.5;
 }
}

.cart-logo{
  font-size: 3rem;
}
.cart-total{
  position: absolute;
  top: 0rem;
  right: -0.8rem;
  width: 2rem;
  height: 2rem;
  background-color:red;
  border-radius:100%;
  text-align: center;
  font-size: 1.5rem;
}

.active{
  border-bottom:2px solid ${({ theme }) => theme.colors.teal_color};
}

.menu-container{
  display: none;
}

.none{
  display: none;
}


.menu-icons{
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.teal_color};
  z-index: 99;
}

.login-btn{
  margin: 0;
  font-size:1.5rem;
}

@media screen and (max-width:${({ theme }) => theme.media.tab}) {

  .menu-container{
  display: block;
}
    .nav-ul{
      background-color:${({ theme }) => theme.colors.dark_Black_color};
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      z-index: 9;
      touch-action: none;
      display: none;
    }

    .open{
      display: flex !important;
    }

    
    .menu-icons{
      position: absolute;
      top: 3rem;
      right: 5rem;
      cursor: pointer;
    }

    .active{
      border: none;
    }

    .nav-li{

.nav-link{
   font-size:3.5rem;
}

}

.cart-logo{
  font-size: 5rem;
}
.cart-total{
  top: -1rem;
  right: -0.8rem;
  width: 3rem;
  height: 3rem;
  font-size: 2.5rem;
}

}

`
const Navbar = () => {

  const { total_item } = useCartGlobal();

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <Wrapper>
      <div className={openMenu ? "menu-container" : "menu-container none"}>
        <CgMenu onClick={() => setOpenMenu(true)} className={openMenu ? 'menu-icons open-menu none' : 'menu-icons open-menu'} />
        <CgCloseR onClick={() => setOpenMenu(false)} className={openMenu ? 'menu-icons open' : 'menu-icons none'} />
      </div>
      <ul className={openMenu ? "nav-ul flex open" : "nav-ul flex"}>
        <li onClick={() => setOpenMenu(false)} className="nav-li"><NavLink className='nav-link common-link' end to='/'>Home</NavLink></li>
        <li onClick={() => setOpenMenu(false)} className="nav-li"><NavLink className='nav-link common-link' to='/about'>About</NavLink></li>
        <li onClick={() => setOpenMenu(false)} className="nav-li"><NavLink className='nav-link common-link' to='/products'>Products</NavLink></li>
        <li onClick={() => setOpenMenu(false)} className="nav-li"><NavLink className='nav-link common-link' to='/contact'>Contact</NavLink></li>

        {
          isAuthenticated ? <li className="nav-li">
            <Button className='login-btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</Button>
          </li> : <li className="nav-li">
            <Button className='login-btn' onClick={() => loginWithRedirect()}>Log In</Button>
          </li>
        }

        <li onClick={() => setOpenMenu(false)} className="nav-li"><NavLink className='nav-link common-link' to='/cart'><RiShoppingCartLine className='cart-logo' /><p className='cart-total'>{total_item}</p></NavLink></li>
      </ul>

    </Wrapper>
  )
}

export default Navbar