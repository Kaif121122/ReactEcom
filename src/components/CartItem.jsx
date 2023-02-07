import React from 'react'
import { FormatPrice } from '../helpers/FormatPrice'
import CartAmountToggle from './CartAmountToggle'
import { AiFillDelete } from 'react-icons/all'
import styled from 'styled-components'
import { useCartGlobal } from '../context/CartContext'

const Wrapper = styled.section`

background-color:${({ theme }) => theme.colors.light_Black_color};

.remove-icon{
    font-size: 3rem;
    color:orangered;
    cursor: pointer;
}

.cart-img{
    max-width:100%;
    height: 10rem;
    object-fit: cover;
}

`


const CartItem = ({ id, color, image, name, price, amount }) => {

    const { removeItem,setIncrease,setDecrease } = useCartGlobal();

   

    return (
        <Wrapper className='cartItems-data grid grid-5-col align-center'>

            {
                // IMAGE CONTAINER 
            }

            <div className='cart-img-container grid-1-gap grid-2-col align-center'>
                <figure>
                    <img className='cart-img' src={image} alt={name} />
                </figure>
                <div className='flex flex-col gap-1'>
                    <p>{name}</p>
                    <div className='flex gap-1'>
                        <p>Color : </p>
                        <p className='color-btn' style={{ backgroundColor: color }}> </p>
                    </div>
                </div>
            </div>

            {
                // PRICE CONTAINER 
            }

            <div className="price">
                <p><FormatPrice price={price} /></p>
            </div>

            {
                // QUANTITY CONTAINER 
            }

            <div className="quantity">
                <CartAmountToggle amount={amount}
                    setIncrease={()=> setIncrease(id)}
                    setDecrease={()=>setDecrease(id)} />
            </div>

            {
                // SUBTOTAL CONTAINER 
            }

            <div className="subtotal">
                <p><FormatPrice price={price * amount} /></p>
            </div>

            {
                // REMOVE CONTAINER 
            }

            <div className='remove'>
                <AiFillDelete className='remove-icon' onClick={() => removeItem(id)} />
            </div>

        </Wrapper>
    )
}

export default CartItem