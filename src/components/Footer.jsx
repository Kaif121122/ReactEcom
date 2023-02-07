import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import { FaFacebookSquare, FaInstagram, FaGithub } from "react-icons/fa";
const Wrapper = styled.section`
background-color:${({ theme }) => theme.colors.light_Black_color};

.pad-container{

  padding: 1% 5%;
}

.footer-top-contact{
  padding:2rem;
  display: flex;
  justify-content: space-between;
  align-items:center;
  background-color:${({ theme }) => theme.colors.dark_Black_color};
  color:${({ theme }) => theme.colors.grey_color};
  transform:translateY(65%);
}

.footer-contact-btn{
  margin-top:0;
}

footer{
color:${({ theme }) => theme.colors.dark_Black_color};
padding-top:8rem;
}
.flex{
  display: flex;
  gap: 1rem;
}
.icons-div{
  padding: 0.5rem 0.5rem 0.3rem;
  background-color:${({ theme }) => theme.colors.teal_color};
  border-radius:5px;

  &:hover{
    
opacity: 0.8;
    transform: scale(0.96);
  }
}

.social-links{
  text-decoration:none;
  color:white;
}
.icons{
  font-size: 3rem;
  cursor: pointer;
  
}

.pad-btm{
padding-bottom:1rem;
}

.common-footer-para{
font-size: 2rem;
color:${({ theme }) => theme.colors.grey_color};
}

 hr{
  height: 2px;
  background-color:${({ theme }) => theme.colors.dark_Black_color};
}

.footer-bottom-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text-white{
color:${({ theme }) => theme.colors.grey_color};
opacity: 1;
}


@media (max-width:${({ theme }) => theme.media.mobile}) {
  .pad-container{
    padding: 1% 2%;
  }
  footer{
    padding-top:6rem;
  }
  }
`

const Footer = () => {

    return (
        <Wrapper>

            <section className=" pad-container">
                <div className='container footer-top-contact'>

                    <div>
                        <p>Ready to buy</p>
                        <p>Buy now !</p>
                    </div>
                    <div>
                        <NavLink to='/products'><Button className='footer-contact-btn'>Shop Now !</Button></NavLink>
                    </div>
                </div>
            </section>

            { /*footer section */}

            <footer>
                <div className="pad-container">
                    <div className="container flex-center footer-container">

                        <div className="footer-about">
                            <h3 className='pad-btm common-footer-para'>Md Kaif Ansari</h3>
                            <p className='text-white common-footer-para'>Web developer</p>
                        </div>


                        <div className="footer-social">
                            <h3 className='pad-btm common-footer-para'>Follow Us</h3>
                            <div className="flex">
                                <div className="icons-div"><a className='social-links' href="https://www.facebook.com/profile.php?id=100009195231164" target="_blank"><FaFacebookSquare className='icons' /></a></div>
                                <div className="icons-div">
                                    <a className='social-links' href='https://www.instagram.com/mdkaifansari999' target='_blank'><FaInstagram className='icons' /></a></div>
                                <div className="icons-div">
                                    <a className='social-links' href='https://github.com/Kaif121122' target='_blank'> <FaGithub className='icons' /></a></div>
                            </div>
                        </div>


                        <div className="footer-contact">
                            <h3 className='pad-btm common-footer-para'>Call us</h3>
                            <h3 common-footer-para>+91 8092415273</h3>
                        </div>

                    </div>
                </div>
                <hr />
                <div className="footer-bottom-section  pad-container">

                    <div className="container grid grid-two-columns footer-bottom-container">
                        <p className='text-white'>
                            @{new Date().getFullYear()} Md Kaif Ansari
                        </p>
                        <div >
                            <p className='text-white'>PRIVACY POLICY</p>
                            <p className='text-white'>

                                TERMS & CONDITIONS
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </Wrapper>
    )
}

export default Footer