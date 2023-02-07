import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`

padding: 2rem;

`

const MyImages = ({ props }) => {

    const [myImage, setMyImage] = useState(0)
    return (
        <Wrapper className='grid grid-1-2-col'>
            <div className="total-image-container flex flex-col gap-1">
                {props.map((elem, index) => {

                    return <figure key={index} onClick={() => setMyImage(index)}>
                        <img  src={elem.url} alt={elem.filename}  className="single-product-image" key={index} />
                    </figure>
                })}
            </div>

            <div className="shown-image-container flex item-center">

                <img src={props[myImage].url} alt={props[myImage].filename} className="single-product-image" />
            </div>

        </Wrapper>
    )
}

export default MyImages