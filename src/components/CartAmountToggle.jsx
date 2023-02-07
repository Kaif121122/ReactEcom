import React from 'react'
import styled from 'styled-components'
import { FaMinus, FaPlus} from 'react-icons/all'

const Wrapper = styled.section`

.cart-toggle-btn{
    font-size: 2.5rem;
    cursor: pointer;
}

`

const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {

    return (
        <Wrapper>
            <div className="flex gap-2 align-center">

                <button onClick={()=>{setDecrease()}}><FaMinus className='cart-toggle-btn' /></button>
                <p>{amount}</p>
                <button onClick={()=>{setIncrease()}}><FaPlus className='cart-toggle-btn' /></button>
            </div> 

        </Wrapper>
    )
}

export default CartAmountToggle