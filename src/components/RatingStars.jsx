import React from 'react'
import styled from 'styled-components'
import { AiFillStar, AiOutlineStar, BsStarHalf } from 'react-icons/all'

const Wrapper = styled.section`


`

const RatingStars = ({ stars, reviews }) => {

    const starReviews = Array.from({ length: 5 }, (elem, index) => {
        const halfRating = index + 0.5;
        return (
            <span key={index}>
                {stars >= index + 1 ? (<AiFillStar />) :
                    stars >= halfRating ? (<BsStarHalf />) : (<AiOutlineStar />)}
            </span>)
    })

    return (
        <Wrapper>
            <p>{starReviews}</p>

            <p>{reviews} reviews</p>
        </Wrapper>
    )
}

export default RatingStars