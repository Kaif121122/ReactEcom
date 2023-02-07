import React from 'react'
import HeroSection from './HeroSection'
import firstImg from "../../public/images/ecommerce-01.jpg"
import FeatureProducts from './FeatureProducts'
import Services from './Services'
import Trusted from './Trusted'

const Home = () => {

  const data = {
    title:
      "Welcome to my Ecommerce Site!",
    para:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: firstImg
  }

  return (
    <>
      <HeroSection
        props={data}
      />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  )
}

export default Home