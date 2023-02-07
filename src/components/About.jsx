import React from 'react'
import HeroSection from './HeroSection'
import secondImg from "../../public/images/ecommerce-02.jpg"


const About = () => {

  const data = {
    title:
      "Welcome to my Flash Sale!",
    para:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img:secondImg
  }
  return (<>
    <HeroSection
      props={data}
    />
  </>
  )
}

export default About