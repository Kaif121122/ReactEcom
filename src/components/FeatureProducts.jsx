import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/context'
import Product from './Product'

const Wrapper = styled.section`

background-color:${({ theme }) => theme.colors.dark_Black_color};
padding: 5rem;

.feature-container{
    padding: 3rem 0;
}

.check-now{
    color:${({ theme }) => theme.colors.teal_color};

}
`
const FeatureProducts = () => {

    const { isLoading, featureProducts } = useGlobalContext();
    console.log(featureProducts)
    if (isLoading) {
        return <div className="loading-container container flex item-center">.....Loading</div>
    }

    return (
        <Wrapper className='container'>
        <div className="feature-container flex flex-col gap-1">
        <h3 className='check-now'>Check Now</h3>
        <h2>Our Feature Service</h2>
        </div>

            <div className="feature-products grid grid-3-col">
                {
                    featureProducts.map((elem) => {

                        return <Product key={elem.id} {...elem} />
                    })
                }
            </div>

        </Wrapper>
    )
}

export default FeatureProducts