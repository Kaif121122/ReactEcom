import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useCartGlobal } from '../context/CartContext'
import CartItem from './CartItem';
import { Button } from '../styles/Button'
import { FormatPrice } from '../helpers/FormatPrice';
import { useAuth0 } from "@auth0/auth0-react";

const Wrapper = styled.section`

background-color:${({ theme }) => theme.colors.dark_Black_color};
padding: 2rem;

.total-price-container{
  padding: 4rem;
background-color:${({ theme }) => theme.colors.light_Black_color};
width: fit-content;
margin-left: auto;
}

.none{
  display: none !important;
}

.prices{
  color:${({ theme }) => theme.colors.teal_color};
  font-weight:600;
  opacity: 1;

}

.user-data {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content:flex-end ;
  gap: 1rem;
}
.user-img{
  width: 10rem;

}

`

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee, total_item } = useCartGlobal();

  const { user, isAuthenticated } = useAuth0();

  return (
    <Wrapper className='flex flex-col gap-3'>
      {
        isAuthenticated && <div className="user-data">
          <p>{user.name}</p>

          <img className='user-img' src={user.picture} alt={user.name} />
        </div>
      }

      {
        // TOP HEADING 
      }

      <div className="cart-heading grid grid-5-col">
        <p>ITEM</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>SUBTOTAL</p>
        <p>REMOVE</p>
      </div>
      <hr />
      {
        // ITEMS 
      }

      <div className="flex flex-col gap-2">
        {

          cart.map((elem) => {
            return <CartItem key={elem.id} {...elem} />
          })
        }
      </div>

      <hr />

      {
        // BUTTONS 
      }

      <div className="cart-btn-container flex justify-between">
        <NavLink to='/products'><Button>continue shopping</Button></NavLink>
        <div><Button className='warning' onClick={clearCart}>clear cart</Button></div>
      </div>

      {
        // TOTAL PRICE CONTAINER  
      }

      <div className={total_item !== 0 ? "total-price-container flex flex-col gap-1" : "none"}>
        <div className="subtotal flex gap-1">
          <p>Subtotal :</p>
          <p className='prices'><FormatPrice price={total_price} /></p>
        </div>
        <div className="shipping-fee flex gap-1">
          <p>Shipping Charge :</p>
          <p className='prices'><FormatPrice price={shipping_fee} /></p>
        </div>
        <div className="total-price flex gap-1">
          <p>Total Price :</p>
          <p className='prices'><FormatPrice price={total_price + shipping_fee} /></p>
        </div>
      </div>

    </Wrapper>

  )
}

export default Cart