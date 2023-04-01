import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Banner2 from '@/Components/Banner2/Banner2'
import Link from 'next/link'
import Menubar from '@/Components/Common/Menubar/Menubar'
import Card3 from '@/Components/Card3/Card3'

// Img

import CardImg from '../../public/images/img3.png'
import CardImg2 from '../../public/images/img4.png'
import BannerImg from '../../public/images/weekend-getaways/banner.png'
import Card2 from '@/Components/Card2/Card2'


const index = () => {

  return (

    <div className=''>
        
        <Menubar></Menubar>

        <Container fluid>

            <Row>
                
                <Col sm={12} md={3}>

                    <h2 className='CardToph1'>VACATIONIDA.COM</h2>
                    
                    <Link href="">
                        
                        <Card3
                               CardImg={CardImg} 
                               CardH2="23 Best Romantic Weekend Getaways from Detroit, Michigan"
                        />

                    </Link>
                
                </Col>

                <Col sm={12} md={6}>

                    <Banner2
                    
                        BannerH1="25 Best Oregon Weekend Getaways"
                        BannerPTxt1="By VacationIda Staff on March 31, 2023 - Updated"
                        BannerImg={BannerImg}
                        BannerPTxt2="Courtesy of - Fotolia.com"

                    />
                
                </Col>

                <Col sm={12} md={3}>

                    <h2 className='CardToph2'>TOP FEATURE STORIES</h2>

                <Link href="">
                        
                        <Card2
                               CardImg={CardImg} 
                               CardH2="23 Best Romantic Weekend Getaways from Detroit, Michigan"
                        />

                    </Link>

                </Col>

            </Row>

        </Container>


        {/* ====================================================================================
                        Blog Component
        ========================================================================================*/}

         <section>
        
            <Container fluid>

                <Row>

                <Col xs={3}></Col>
                <Col sm={12} lg={6}>

                    <div className='BlogComponent'>

                        <h2> <span>1.</span>Hallmark Resort & Spa Cannon Beach - 1 hour 30 min from Portland</h2>

                        <div className='Hr'></div>

                        <p> 

                                <img src="/images/img5.png" alt="" />
                                
                                <span>© Hallmark Resort</span>

                                Hallmark Resort & Spa rests just steps from the famous Cannon Beach and offers an array 
                                of luxurious amenities, elegant rooms, world-class cuisine, a full service spa, sauna and
                                 fitness center. The resort features a variety of accommodations, from well-appointed 
                                 sea-facing one- and two-bedroom suites and standard rooms, to beach houses for larger
                                  groups, many of which boast oceanfront balconies or patios, cozy gas fireplaces, fully
                                   equipped kitchenettes and deluxe amenities, such as spa tubs for two, and high-speed 
                                   Wi-Fi.
                        
                        </p>

                    </div>

                </Col>
                <Col xs={3}></Col>

                </Row>    

            </Container>

        </section>   

        <div className='padding-gap'></div>

    </div>
  )
}

export default index