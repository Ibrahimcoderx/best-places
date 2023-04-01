import React from 'react'
import { Container } from 'react-bootstrap'
import Link from 'next/link'
import style from '../Footer/Footer.module.css'

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

  return (

    <div>

      <Container className={style.FooterCon} fluid>

          <div className={style.FooterDiv}>

            <div>

              <img src="/images/logo2.png" alt="" />

              <div> 
                
                  <Link href="">About Us</Link> 

                  <Link href="">/Contact Us</Link> 

                  <Link href=""> / Privacy Policy</Link> 

                  <Link href=""> / Terms of Service</Link> 

              </div>

                <p>The information contained on this website is for general information purposes only. While we 
                  strive to keep the information up to date and correct, we make no representations or warranties
                  of any kind Copyright © {year} VacationIda, LLC All Rights Reserved
                </p>

            </div>

          </div>

      </Container>

    </div>

  )

}

export default Footer