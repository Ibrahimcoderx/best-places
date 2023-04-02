import VacationIdea from '@/Components/VacationIdea/VacationIdea'
import Footer from '@/Components/Common/Footer/Footer'
import Menubar from '@/Components/Common/Menubar/Menubar'
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import MoreIdea from '@/Components/MoreIdea/MoreIdea'
import Banner from '@/Components/Banner/Banner'
import Link from 'next/link'

// Banner Img

import BannerImg from '../public/images/home/img2.png'
import BannerImg2 from '../public/images/home/bg2.png'
import CardImg from '../public/images/img3.png'
import CardImg1 from '../public/images/img4.png'
import CardImg2 from '../public/images/img5.png'
import CardImg3 from '../public/images/img6.png'
import Card from '@/Components/Card/Card'
import Card2 from '@/Components/Card2/Card2'
import LinkGroup from '@/Components/LinkGroup/LinkGroup'


const index = () => {

  return (

  <div className='homepage'>

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
                      BannerH1="Top 25 Oregon Destinations Beaches "
                      BannerPTxt=" Oregon's rugged and picturesque coastline is a true natural wonder that never fails to mesmerize both locals and tourists. With its stunning sea stacks, rolling sand dunes, and dramatic rocky cliffs, the Oregon coast offers endless opportunities for adventure, relaxation, and exploration."
                  />

                </Link>

                <div className="Hr"></div>

                <Row>
                    
                    <Col sm={12} md={6}>

                      <Link href="https://www.harpersbazaar.com/">

                          <Card
                              CardImg={CardImg}
                              CardH2="Illinois Love Stories 25 Romantic Weekend Getaways"
                          />

                      </Link>

                    </Col>

                    <Col sm={12} md={6}>

                      <Link href="https://vacationidea.com/">

                        <Card
                            CardImg={CardImg1}
                            CardH2="25 Destinations for Outdoor Enthusiasts Pennsylvania"
                        />

                      </Link>

                    </Col>

                    <Col sm={12} md={6}>

                      <Link href="https://vacationidea.com/">

                        <Card
                            CardImg={CardImg2}
                            CardH2="East Coast Serenity 25 Relaxing Beaches"
                        />

                      </Link>

                    </Col>

                    <Col sm={12} md={6}>

                      <Link href="https://vacationidea.com/">

                        <Card
                            CardImg={CardImg3}
                            CardH2="Sun Sand and Sea 25 Best Beaches North Carolina"
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
                      CardH2="The Top 25 Best Beaches to Visit in California"
                  />

                </Link>

                <Link href="https://vacationidea.com/">

                  <Card2
                      CardImg={CardImg1}
                      CardH2="Discover the Best 23 Beaches to Visit in North Carolina "
                  />

                </Link>

                <Link href="https://vacationidea.com/">

                  <Card2
                      CardImg={CardImg1}
                      CardH2="Top 25 Caribbean Destinations for Fun-Filled Family Getaways"
                  />

                </Link>

                <Link href="https://vacationidea.com/">

                  <Card2
                      CardImg={CardImg1}
                      CardH2="25 Wonders of the World: Unveiling the Most Gorgeous Places to Visit"
                  />

                </Link>

                <Link href="https://vacationidea.com/">

                  <Card2
                      CardImg={CardImg1}
                      CardH2="25 Perfect Weekend Getaways for Romance and Relaxation"
                  />

                </Link>


              </Col>

            </Row>

        </Container>

      </section>

      {/* ==========================================================================================
              Banner2
      ==============================================================================================*/}

      <section>

        <Container fluid>

            <Row>

              <Col sm={12} md={3}>

              </Col>
              
              {/* Card============================= */}

              <Col sm={12} md={6}>

                <Link href="https://vacationidea.com/ ">

                  <Banner
                      BannerImg={BannerImg2}
                      BannerH2="25 Best Natural Hot Springs Must-Visit "
                      BannerPTxt=" From the geothermal wonders of Yellowstone to the steamy hot springs of the Mojave Desert, the United States boasts an abundance of natural hot springs that offer a range of therapeutic benefits, from relaxation and stress relief to healing and rejuvenation. Here are the top 25 must-visit natural hot springs in America that combine stunning scenery, invigorating waters, and unique cultural experiences. Whether you're looking for a secluded wilderness retreat or a vibrant community hot spot, these natural hot springs are sure to delight and inspire."
                  />

                </Link>

                <div className="Hr"></div>

                <Row>
                    
                    <Col sm={12} md={6}>

                      <Link href="https://www.harpersbazaar.com/">

                          <Card
                              CardImg={CardImg}
                              CardH2="Discover the Top 25 Weekend Getaways in Pennsylvania"
                          />

                      </Link>

                    </Col>

                    <Col sm={12} md={6}>

                      <Link href="https://vacationidea.com/">

                        <Card
                            CardImg={CardImg1}
                            CardH2="25 Amazing Day Trips Explore Iowa's"
                        />

                      </Link>

                    </Col>

                    <Col sm={12} md={6}>

                      <Link href="https://vacationidea.com/">

                        <Card
                            CardImg={CardImg2}
                            CardH2="Top 14 Waterfalls to Explore Natural Beauty Charlotte Area "
                        />

                      </Link>

                    </Col>

                    <Col sm={12} md={6}>

                      <Link href="https://vacationidea.com/">

                        <Card
                            CardImg={CardImg3}
                            CardH2="Top 25 Hotels with Indoor Swimming Pools"
                        />

                      </Link>

                    </Col>

                </Row>


              </Col>

              {/* Card2======================== */}

              <Col sm={12} md={3}>

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
             Body Text
      ==============================================================================================*/}

      <section>

        <Container fluid>

          <Row>

            <Col xs={3}></Col>
            <Col sm={12} lg={6}>

              <div className='BodyDiv'>

                  <h2>DREAM VACATION DESTINATIONS</h2>

                  <p>
                    Whether you are planning a quick weekend getaway, family vacation, honeymoon or a road trip, 
                    there are many amazing choices in the United States and abroad. If you only have a few days,
                    browse our weekend getaways page for choices near you so that you can take a short drive rather
                      than spend precious vacation time on travel. If you have a long weekend or a full week, consider
                      a trip to the Caribbean, Hawaii, Europe, California and other fun places around the world.
                  </p>

                  {/* ul----------- */}
                  
                  <ul>

                      <li>
                                <p> 

                                  <Link href=''>California</Link>
                                  <img src="/images/img5.png" alt="" />
                                  
                                  <b>Couples often like similar things:</b> spas, golf, hiking, swimming or just relaxing by the pool.
                                  The best way to find your perfect vacation is to make a dream list of 10 things that would make 
                                  you most happy. Bucket list destinations in the U.S. include Key West, New York City and Sanibel Island.
                                  your anniversary trip should include types of activities that you both enjoy. Best honeymoon destinations:
                                    vacation getaways on the East Coast, West Coast, Europe.
                                    
                                   
                                </p>

                      </li>

                      <li>
                                <p> 

                                  <b>Couples often like similar things:</b> spas, golf, hiking, swimming or just relaxing by the pool.
                                  The best way to find your perfect vacation is to make a dream list of 10 things that would make 
                                  you most happy. Bucket list destinations in the U.S. include Key West, New York City and Sanibel Island.
                                  your anniversary trip should include types of activities that you both enjoy. Best honeymoon destinations:
                                    vacation getaways on the East Coast, West Coast, Europe.
                                
                                </p>

                      </li>

                  </ul>

              </div>

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




       <Footer></Footer>
     
  </div>
    
  )
}

export default index
