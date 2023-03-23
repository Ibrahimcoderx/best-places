import React from 'react'
import styles from '../../styles/blog_one/blog_one.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


// swiper--
import { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const BlogOne = () => {
  // swiper
    const swiperRef = useRef();

  return (

    <section>
          
           {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Carousel Items
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}


       <section className={styles.CarouselSec}>
        
        <Container fluid className={styles.CarouselSecCon}>

           <Swiper

                 spaceBetween={0}

                 centeredSlides={true}

                 autoplay={{
                   delay: 3500,
                   disableOnInteraction: false,
                 }}

                 pagination={{
                   clickable: true,
                 }}

                 navigation={true}
                 modules={[Autoplay, Pagination, Navigation]}
                 className="mySwiper"

             >
               <SwiperSlide>  
                     
                   <img className={styles.CaroselImg} src="https://bit.ly/3YCvspO" alt="img" />
                   
                     <div className={styles.caroseltxtcenter} id="carosel-txt2">

                         <div className={styles.carouseltxt}>

                             <p className={styles.bgptext}>Get Our Best Burgers With The Best Flavors</p>

                             <h2 className={styles.bgh2text}>“
                                 <span className={styles.carospantxt1}> Burgers</span> That Makes                               
                                 <br/>

                                     Your Tounge 
                                     
                                 <span className={styles.carospantxt2}>Cry</span>”

                             </h2>   

                          </div>

                      </div>

               </SwiperSlide>

               <SwiperSlide>

                 <img className={styles.CaroselImg} src="https://bit.ly/3lu2ZEx" alt="img" />

                 <div className={styles.caroseltxtcenter} id="carosel-txt2">

                         <div className={styles.carouseltxt}>

                             <p className={styles.bgptext}>Get Our Best Burgers With The Best Flavors</p>

                             <h2 className={styles.bgh2text}>“<span className={styles.carospantxt1}>Burgers</span> That Makes<br/>

                                   Your Tounge <span className={styles.carospantxt2}>Cry</span>”

                             </h2>    

                         </div>
                 </div>
               </SwiperSlide>

               <SwiperSlide>
                   <img className={styles.CaroselImg} src="https://bit.ly/40JuYQt" alt="img" />

                   <div className={styles.caroseltxtcenter} id="carosel-txt2">

                           <div className={styles.carouseltxt}>

                               <p className={styles.bgptext}>Get Our Best Burgers With The Best Flavors</p>

                               <h2 className={styles.bgh2text}>“<span className={styles.carospantxt1}>Burgers</span> That Makes<br/>

                                     Your Tounge <span className={styles.carospantxt2}>Cry</span>”
                               </h2>                
                           </div>
                   </div>
               </SwiperSlide>    

           </Swiper>
        </Container>
      </section>



          {/*  --------------------------------------------------------------------------------------------------------------------- 
                Slider
          -------------------------------------------------------------------------------------------------------*/}
          <section className={styles.Section_gap}></section>

          <section className={styles.CarouselSec2}>

                    <h2 className={styles.text4}>Our <span className={styles.text4R}>Categories</span></h2>

                      {/* slider--- */}

            <Container className='OverflowVsivle'>
                
              <Row>

                <Col lg={12}>

                <div className={styles.BtnDev}>
                    <button className={styles.SliderB1} onClick={() => swiperRef.current?.slidePrev()}>   
                      <IoIosArrowBack  className={styles.icon1}></IoIosArrowBack>
                    </button>

                    <button className={styles.SliderB2} onClick={() => swiperRef.current?.slideNext()}> 
                      <IoIosArrowForward className={styles.icon2}></IoIosArrowForward>
                    </button>
                </div>
                  
              
                <div class="swiper mySwiperProductList">

                  <Swiper
                      slidesPerView={5}
                      spaceBetween={30}
                      slidesPerGroup={5}
                      loop={true}
                      loopFillGroupWithBlank={true}
                      pagination={{
                        clickable: true,
                      }}
                      // navigation={true}
                      modules={[Pagination, Navigation]}
                      onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                      }}
                      breakpoints={{
                        120: {
                          slidesPerView: 1,
                          slidesPerGroup: 1,
                        },
                        320: {
                          slidesPerView: 2,
                          slidesPerGroup: 2,
                        },
                        575: {
                          slidesPerView: 2,
                          slidesPerGroup: 2,
                        },
                  
                        768: {
                          slidesPerView: 3,
                          slidesPerGroup: 3,
                        },
                        1200: {
                          slidesPerView: 4,
                          slidesPerGroup: 4,
                        },
                        1360: {
                          slidesPerView: 5,
                          slidesPerGroup: 5,
                        },
                      }}
                      className="mySwiper2"
                    
                    >
                    
                      <SwiperSlide>
                        <div className={styles.imgbox}>
                          <div className={styles.imgborder}>
                            <img className={styles.h} src="https://bit.ly/3XkPXq4" alt="Burger"/>
                          </div>
                        </div>
                        <h2 className={styles.slidertxt}>Burger</h2>
                      </SwiperSlide>
                    
                      <SwiperSlide>
                        <div className={styles.imgbox}>
                          <div className={styles.imgborder}>
                            <img className={styles.h} src="https://bit.ly/3XkPXq4" alt="Burger"/>
                          </div>
                        </div>
                        <h2 className={styles.slidertxt}>Sandwiches</h2>
                      </SwiperSlide>
                          
                      <SwiperSlide>
                        <div className={styles.imgbox}>
                          <div className={styles.imgborder}>
                            <img className={styles.h} src="https://bit.ly/3XkPXq4" alt="Burger"/>
                          </div>
                        </div>
                        <h2 className={styles.slidertxt}>Shawarma</h2>
                      </SwiperSlide>
                          
                      <SwiperSlide>
                        <div className={styles.imgbox}>
                          <div className={styles.imgborder}>
                            <img className={styles.h} src="https://bit.ly/3XkPXq4" alt="Burger"/>
                          </div>
                        </div>
                        <h2 className={styles.slidertxt}>Wraps & Tacos</h2>
                      </SwiperSlide>
                          
                      <SwiperSlide>
                        <div className={styles.imgbox}>
                          <div className={styles.imgborder}>
                            <img className={styles.h} src="https://bit.ly/3XkPXq4" alt="Burger"/>
                          </div>
                        </div>
                        <h2 className={styles.slidertxt}>French Fries</h2>
                      </SwiperSlide>

                          
                      <SwiperSlide>
                        <div className={styles.imgbox}>
                          <div className={styles.imgborder}>
                            <img className={styles.h} src="https://bit.ly/3XkPXq4" alt="Burger"/>
                          </div>
                        </div>
                        <h2 className={styles.slidertxt}>Shawarma</h2>
                      </SwiperSlide>
                          
                      <SwiperSlide>
                        <div className={styles.imgbox}>
                          <div className={styles.imgborder}>
                            <img className={styles.h} src="https://bit.ly/3XkPXq4" alt="Burger"/>
                          </div>
                        </div>
                        <h2 className={styles.slidertxt}>Sandwiches</h2>
                      </SwiperSlide>
                          
                      <SwiperSlide>
                        <div className={styles.imgbox}>
                          <div className={styles.imgborder}>
                            <img className={styles.h} src="https://bit.ly/3XkPXq4" alt="Burger"/>
                          </div>
                        </div>
                        <h2 className={styles.slidertxt}>Burger</h2>
                      </SwiperSlide>
                          
                      <SwiperSlide>
                        <div className={styles.imgbox}>
                          <div className={styles.imgborder}>
                            <img className={styles.h} src="https://bit.ly/3XkPXq4" alt="Burger"/>
                          </div>
                        </div>
                        <h2 className={styles.slidertxt}>Wraps & Tacos</h2>
                      </SwiperSlide>
                          
                      <SwiperSlide>
                        <div className={styles.imgbox}>
                          <div className={styles.imgborder}>
                            <img className={styles.h} src="https://bit.ly/3XkPXq4" alt="Burger"/>
                          </div>
                        </div>
                        <h2 className={styles.slidertxt}>French Fries</h2>
                      </SwiperSlide>

                  
                  
                  </Swiper>
                      
                  {/* <div class="swiper-pagination"></div>
                  <div class="navbutton">
                    <div class="swiper-button-prev2"><IoIosArrowForward className='icon1'></IoIosArrowForward></div>
                    <div class="swiper-button-next2"><IoIosArrowBack className='icon2'></IoIosArrowBack></div>
                  </div> */}

                </div>

                </Col>

              </Row>
              
            </Container>
                
          </section>











    </section>
  )
}

export default BlogOne