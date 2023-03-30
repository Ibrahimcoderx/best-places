import VacationIdea from '@/Components/VacationIdea/VacationIdea'
import Footer from '@/Components/Common/Footer/Footer'
import Menubar from '@/Components/Common/Menubar/Menubar'
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import MoreIdea from '@/Components/MoreIdea/MoreIdea'
import Banner from '@/Components/Banner/Banner'
import Link from 'next/link'

// Banner Img

import BannerImg from '../public/images/img2.png'
import CardImg from '../public/images/img3.png'
import CardImg1 from '../public/images/img4.png'
import CardImg2 from '../public/images/img5.png'
import CardImg3 from '../public/images/img6.png'
import Card from '@/Components/Card/Card'
import Card2 from '@/Components/Card2/Card2'
import LinkGroup from '@/Components/LinkGroup/LinkGroup'


const index = () => {

  return (

  <div>

       <Menubar></Menubar>

       <VacationIdea></VacationIdea>

      {/* ==========================================================================================
              Banner
      ==============================================================================================*/}

      <section>

        <Container fluid>

            <Row>

              <Col sm={12} md={3}>

                <MoreIdea></MoreIdea>

              </Col>
              
              {/* Card============================= */}

              <Col sm={12} md={6}>

                <Link href="https://vacationidea.com/ ">

                  <Banner
                      BannerImg={BannerImg}
                      BannerH1="25 Best Oregon Beaches"
                      BannerPTxt="From rolling sand dunes to towering sea stacks, Oregon's coastline continually captures the imagination of locals and visitors alike."
                  />

                </Link>

                <div className="Hr"></div>

                <Row>
                    
                    <Col sm={12} md={6}>

                      <Link href="https://www.harpersbazaar.com/">

                          <Card
                              CardImg={CardImg}
                              CardH2="25 Best Romantic Weekend Getaways in Illinois"
                          />

                      </Link>

                    </Col>

                    <Col sm={12} md={6}>

                      <Link href="https://vacationidea.com/">

                        <Card
                            CardImg={CardImg1}
                            CardH2="25 Best Romantic Weekend Getaways in Illinois Hello"
                        />

                      </Link>

                    </Col>

                    <Col sm={12} md={6}>

                      <Link href="https://vacationidea.com/">

                        <Card
                            CardImg={CardImg2}
                            CardH2="25 Best Romantic Weekend Getaways in Illinois Hello"
                        />

                      </Link>

                    </Col>

                    <Col sm={12} md={6}>

                      <Link href="https://vacationidea.com/">

                        <Card
                            CardImg={CardImg3}
                            CardH2="25 Best Romantic Weekend Getaways in Illinois Hello"
                        />

                      </Link>

                    </Col>

                </Row>


              </Col>

              {/* Card2======================== */}

              <Col sm={12} md={3}>

                <Link href="https://vacationidea.com/">

                  <Card2
                      CardImg={CardImg1}
                      CardH2="25 Best Beaches in California"
                  />

                </Link>

                <Link href="https://vacationidea.com/">

                  <Card2
                      CardImg={CardImg1}
                      CardH2="25 Best Beaches in California"
                  />

                </Link>

                <Link href="https://vacationidea.com/">

                  <Card2
                      CardImg={CardImg1}
                      CardH2="25 Best Beaches in California"
                  />

                </Link>


              </Col>

            </Row>

        </Container>

      </section>
      
      {/* ==========================================================================================
              LingGroup
      ==============================================================================================*/}
      <section>

        <Container fluid>

                <Row>

                    <Col xs={3}></Col>
                    <Col sm={12} lg={6}>

                      <LinkGroup></LinkGroup>

                    </Col>
                    <Col xs={3}></Col>

                </Row>

        </Container>

      </section>

      <div className='padding-gap'></div>

      {/* ==========================================================================================
              Banner
      ==============================================================================================*/}



      {/* ==========================================================================================
              Banner
      ==============================================================================================*/}



      {/* ==========================================================================================
              Banner
      ==============================================================================================*/}



      {/* ==========================================================================================
              Banner
      ==============================================================================================*/}




       <Footer></Footer>
     
  </div>
    
  )
}

export default index
