import React from 'react'
import styled from 'styled-components'
import { BiConfused, GiCondorEmblem, GiConqueror, SiIconfinder, FaFonticonsFi } from "react-icons/all"

const Wrapper = styled.section`

background-color:${({ theme }) => theme.colors.light_Black_color};
padding: 5rem;
text-align: center;

.trusted-icons-container{
    margin-top:8rem;
}
.trusted-icons{
font-size:5rem;
color: ${({ theme }) => theme.colors.teal_color};
cursor: pointer;
}

`

const Trusted = () => {
    return (
        <Wrapper>
            <h3>Trusted By 1000+ Companies</h3>
            <div className="flex justify-around trusted-icons-container">
                <div className="trusted-container">
                    <BiConfused className='trusted-icons' />
                </div>
                <div className="trusted-container">
                    <GiCondorEmblem className='trusted-icons' />
                </div>
                <div className="trusted-container">
                    <GiConqueror className='trusted-icons' />
                </div>
                <div className="trusted-container">
                    <SiIconfinder className='trusted-icons' />
                </div>
                <div className="trusted-container">
                    <FaFonticonsFi className='trusted-icons' />
                </div>
            </div>
        </Wrapper>
    )
}

export default Trusted