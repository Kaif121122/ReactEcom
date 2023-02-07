import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button'

const Wrapper = styled.section`

background-color:${({ theme }) => theme.colors.light_Black_color};
padding: 5rem;

.common-heading{
  text-align: center;
  padding:1rem;
}
.contact-form{
  display:flex;
  justify-content: center;
  align-items: center;
  padding-top:5rem;

}

.contact-para{
  text-align: center;
  font-size: 2rem;
}
.form{
    display: flex;
    flex-direction:column;
    width:40%;
   gap: 2rem;
    
  }


  .send-btn{
    width: 30%;
  }

  
@media (max-width:${({ theme }) => theme.media.tab}) {
  .form{
    width: 60%;
  }
  .send-btn{
    width: 32%;
  }
  }
  @media (max-width:${({ theme }) => theme.media.mob}) {
  .form{
    width: 100%;
  }
  .send-btn{
    width: 35%;
  }
  }
  `
const Contact = () => {

  return (
    <Wrapper>
      <h2 className="common-heading">Feel free to contact us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5746594174616!2d86.50933261429861!3d23.833719491506717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6b992a944e9b1%3A0x768fda6e218cb33e!2sCITY%20FUELS%20%2C%20Petrol%20Pump!5e0!3m2!1sen!2sin!4v1665653467269!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="container">
        <div className="contact-form">

          <form action="https://formspree.io/f/xjvzojdv" method='POST' className='form'>
            <div className="contact-para-container">
              <p className="contact-para">I would love to hear about your project and how i could help. please fill in the form, and i'll get back to you as soon as possible.</p>
            </div>
            <input type="text" name='username' className='common-inputs' placeholder='Username' autoComplete='off' required />
            <input type="email" name='email' className='common-inputs' placeholder='Email' autoComplete='off' required />
            <textarea name='message' cols="30" className='common-inputs' rows="6" placeholder='Enter your message...' autoComplete='off' required />
            <Button type='submit' className='send-btn'>send</Button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contact