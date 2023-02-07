import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/context'
import { useParams } from 'react-router-dom'
import PageNavigation from './PageNavigation';
import { FormatPrice } from '../helpers/FormatPrice';
import { TbReplace, TbTruckDelivery, MdSecurity } from "react-icons/all"
import MyImages from './MyImages';
import RatingStars from './RatingStars';
import AddToCart from './AddToCart';


const API = "https://api.pujakaitem.com/api/products";

const Wrapper = styled.section`

background-color:${({ theme }) => theme.colors.dark_Black_color};
padding: 2rem;

.product-container{
  padding: 8rem 5rem;
}

.product-warranty-container{
  padding: 1rem 0;
}

.product-warranty-data{
  cursor: pointer;
}

.warranty-icon{
  font-size: 5rem;
  cursor: pointer;
  color:${({ theme }) => theme.colors.teal_color};
}


`

const SingleProduct = () => {


  const { isSingleLoading, getSingleProduct, singleProduct } = useGlobalContext();

  const { id: newId, category, colors, company, description, image, name, price, reviews, stars, stock } = singleProduct;

  const { id } = useParams();


  useEffect(() => {

    getSingleProduct(`${API}?id=${id}`)
  }, [])

  if (isSingleLoading) {
    return <div className="loading-container container flex item-center">.....Loading</div>
  }

  return (
    <Wrapper className='container'>
      <PageNavigation props={name} />

      {
        // SINGLE PRODUCT DATA
      }

      <div className="product-container grid grid-2-col flex item-center">


        {
          // IMAGE CONTAINER
        }
        <div className="left-img-container">

          <MyImages props={image} />

        </div>

        {
          // RIGHT DATA
        }
        <div className="right-data-container flex flex-col gap-1">

          <h3>{name}</h3>

          {
            // RATING STARS
          }
          <RatingStars stars={stars} reviews={reviews} />


          {
            // PRICES
          }

          <p className="product-data-price">
            MRP:
            <del><FormatPrice price={price + 250000} /></del>
          </p>

          <p className="product-data-price real-price">
            MRP:
            Deal of the Day : <FormatPrice price={price} />
          </p>


          {
            // DESCRIPTION
          }

          <p>{description}</p>

          {
            // WARRANTY CONTAINER
          }

          <div className="product-warranty-container flex">
            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Free Delivery</p>

            </div>


            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Free Delivery</p>

            </div>

            <div className="product-warranty-data">
              <MdSecurity className="warranty-icon" />
              <p>2 Year Warranty</p>

            </div>


            <div className="product-warranty-data">
              <TbReplace className="warranty-icon" />
              <p>30 Days Replacement</p>

            </div>
          </div>

          {
            // STOCK 
          }

          <div className="product-data-info flex flex-col gap-1">
            <p>Available: <span>{stock > 0 ? "In Stock" : "Not Available"}</span></p>

            <p>
              ID : <span>{id}</span>
            </p>

            <p>
              Brand : <span>{company}</span>
            </p>
          </div>

          <hr />

          {
            // ADD_CART SECTION 
          }

          {stock > 0 && <AddToCart product={singleProduct} />}

        </div>

      </div>

    </Wrapper>
  )
}

export default SingleProduct