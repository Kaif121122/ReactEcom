import React, { useState } from 'react'
import styled from 'styled-components'
import { FaCheck } from "react-icons/all"
import CartAmountToggle from './CartAmountToggle'
import { Button } from '../styles/Button'
import { NavLink } from 'react-router-dom'
import { useCartGlobal } from '../context/CartContext'

const Wrapper = styled.section`


`

const AddToCart = ({ product }) => {

    const { addItems } = useCartGlobal();
    const { id, colors, stock } = product;

    const [color, setColor] = useState(colors[0])
    const [amount, setAmount] = useState(1)

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock)
    }

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }

    return (
        <Wrapper className='flex flex-col gap-2'>
            <p className='flex align-center gap-1'> Colors : {colors.map((elem, index) => {
                return <button
                    onClick={() => { setColor(elem) }}
                    key={index}
                    className={elem === color ? "active color-btn" : "color-btn"}
                    style={{ backgroundColor: elem }}>
                    {elem === color ? <FaCheck className='selected-icon' /> : null}
                </button>
            })}
            </p>

            {
                // CART AMOUNT TOGGLE 
            }

            <CartAmountToggle amount={amount}
                setIncrease={setIncrease}
                setDecrease={setDecrease} />

            {
                // ADD ITEMS TO CART 
            }


            <NavLink to='/cart' onClick={() => addItems(id, amount, color, product)}><Button>Add To Cart</Button></NavLink>
        </Wrapper>
    )
}

export default AddToCart