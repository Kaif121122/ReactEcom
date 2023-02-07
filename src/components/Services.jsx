import React from 'react'
import styled from 'styled-components'
import {TbTruckDelivery ,  MdOutlineNoCell ,GiReceiveMoney, RiSecurePaymentLine} from 'react-icons/all'

const Wrapper = styled.section`


background-color:${({ theme }) => theme.colors.dark_Black_color};
padding: 8rem;
text-align: center;

.service-container{

    background-color:${({ theme }) => theme.colors.light_Black_color};
    padding: 3rem;
    border-radius: 1rem;
    cursor: pointer;
}

.service-icons{
font-size:5rem;
color: ${({ theme }) => theme.colors.teal_color};

}

`

const Services = () => {
  return (
    <Wrapper className='service-container container flex align-center justify-between gap-2'>

    <div className="delivery-container service-container">
    <TbTruckDelivery className='service-icons'/> 
    <p>Super Fast and Free Delivery</p>
    </div>

    <div className="flex flex-col gap-2">
    <div className="shipping-container service-container">
    <MdOutlineNoCell className='service-icons'/>
    <p>Non-contact Shipping</p>
    </div>
    <div className="money-back-container service-container">
    <GiReceiveMoney className='service-icons'/>
    <p>Money Back Guaranteed</p>
    </div>
    </div>

    <div className="payment-container service-container">
    <RiSecurePaymentLine className='service-icons'/>
    <p>Super Secure Payment System</p>
    </div>
    
    </Wrapper>
  )
}

export default Services