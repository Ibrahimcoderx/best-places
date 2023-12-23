import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import styles from '../Menubar/Menubar.module.css'
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown';
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


// icon

import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";;
import { HiOutlineBars3CenterLeft} from "react-icons/hi2";
import { BsInstagram} from "react-icons/bs";
import { FaTwitterSquare} from "react-icons/fa";




const Menubar = () => {

        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

  return (

    <>

       <section className={styles.Menubar}>


         {/* ================================================================================================
                    Menubar1
        ====================================================================================================*/}   
             
                <section>

                    <Container>

                        <Row>

                            <Col sm={12}>

                                <div className={styles.MenubarDiv}>

                                    <div>
                                        <img src="/images/logo.png" alt="img"/>
                                    </div>

                                    {/* Mid Menu---------------------------------- */}

                                    <div className={styles.midMenuDiv}>
                                    
                                               
                                                <div className={styles.midMenuBox}>

                                                    <Dropdown>
                                                            <Dropdown.Toggle id="dropdown-basic" className={styles.DpBtn}>
                                                             All Category

                                                                <IoIosArrowDown className={styles.DpBtnArr}></IoIosArrowDown>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu className={styles.midMenuBoxx}>
                                                                    <Dropdown.Item href="#/action-1">Cheap Vacations</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2">Beach Vacations</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3">Vacations by Season</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3">Vacations by Month</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3">Honeymoon Vacations</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3"> Vacation by Region </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>

                                             <div className={`${styles.midMenuBox} ${styles.midMenuBox5}`}>

                                                <span className={styles.spanDivider}></span>

                                                <Link href="">

                                                     <input className={styles.inputBtn} type="text" placeholder="I'm shopping for..."/>

                                                </Link>

                                                <Link href="">

                                                    <span className={styles.searchBox}>

                                                    <CiSearch className={styles.searchBtn}></CiSearch>

                                                    </span>
                                                </Link>

                                               
                                             </div>
                                              
                                         
                                    </div>

                                    {/* right Menu---------------------------------- */}

                                    <div className={styles.Menu1IconBox}>

                                        <Link href="">

                                          <FaFacebookSquare className={styles.Menu1Icon1}></FaFacebookSquare>

                                        </Link>

                                        <Link href="">

                                          <BsInstagram className={styles.Menu1Icon2}></BsInstagram>

                                        </Link>

                                        <Link href="">

                                          <FaTwitterSquare className={styles.Menu1Icon3}></FaTwitterSquare>

                                        </Link>

                                    </div>

                                </div>

                            </Col>

                        </Row>

                    </Container>

                </section>   
                


                {/* ================================================================================================
                    Menubar2
                    ====================================================================================================*/}  

                <section  className={styles.MenubarSec} >

                 
                  <Container fluid className={styles.Menubar2Flu}>
                    
                    <Container>

                        <Row >
                            <Col>
                                <div className={styles.Menubar2}>

                                    {/* Mobile------------------------- start */}

                                         {/* Offcanvas ------------- */}

                                        <div className={styles.OffcanvasMobile}>
                                            <Button className={styles.MenubarButton} onClick={handleShow}>
                                                <img src="images/bar.svg" alt="bar" />
                                            </Button>


                                            <Offcanvas  className={styles.OffcanvasUlDevMain} show={show} onHide={handleClose}>
                                                <Offcanvas.Header closeButton>
                                                <Offcanvas.Title>  
                                             <div>
                                                <img src="images/logo.svg" alt="img"/>
                                            </div>

                                            </Offcanvas.Title>

                                                </Offcanvas.Header>

                                                <Offcanvas.Body>

                                                     <div className={styles.OffcanvasUlDev}>

                                                        <ul>
                                                                    <li><Link href="#">NATIONAL PARKS</Link></li>      
                                                                    <li><Link href="#">THEME PARKS</Link></li>
                                                                    <li><Link href="#">ROAD TRIPS</Link></li>
                                                                    <li> <Link href="#">WINE COUNTRY</Link></li>
                                                                    <li><Link href="#">HISTORIC LANDMARKS</Link></li>      
                                                                    <li><Link href="#">CITY BREAKS</Link></li>
                                                                    <li><Link href="#">LUXURY VACATIONS</Link></li>
                                                                    <li> <Link href="#">BEACH RESORTS</Link></li>
                                                        </ul>

                                                     </div>



                                                </Offcanvas.Body>

                                            </Offcanvas>

                                        </div>





                                        {/* Mid Menu--  start*/}
                                        
                                        {/* Search dev */}

                                        <div className={`${styles.midMenuDiv} ${styles.midMenuDiv1}`}>
                                        
                                                

                                                    <div className={styles.midMenuBox}>

                                                        <Dropdown>

                                                                <Dropdown.Toggle id="dropdown-basic" className={styles.DpBtn}>
                                                                All Category

                                                                    <IoIosArrowDown className={styles.DpBtnArr}></IoIosArrowDown>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href="#/action-1">Cheap Vacations</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2">Beach Vacations</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3">Vacations by Season</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3">Vacations by Month</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3">Honeymoon Vacations</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3"> Vacation by Region </Dropdown.Item>

                                                                </Dropdown.Menu>

                                                        </Dropdown>

                                                    </div>

                                                <div className={`${styles.midMenuBox} ${styles.midMenuBox5}`}>

                                                    <span className={styles.spanDivider}></span>
                                                    <input className={styles.inputBtn} type="text" placeholder="I'm shopping for..."/>
                                                    <span className={styles.searchBox}>
                                                    <CiSearch className={styles.searchBtn}></CiSearch>
                                                    </span>

                                                </div>
                                                
                                            
                                        </div>


                                    {/* Mobile--- end */}



                  

                                    <div className={styles.Menubar2Left}>

                                        {/* Offcanvas ------------- */}

                                        <>
                                            <Button className={styles.MenubarButton} onClick={handleShow}>

                                            <HiOutlineBars3CenterLeft  className={styles.MenubarBar}></HiOutlineBars3CenterLeft>
                                            
                                            <Link href="#"> LAND OF DREAMS </Link>
                                            
                                            </Button>


                                            <Offcanvas  className={styles.OffcanvasUlDevMain} show={show} onHide={handleClose}>

                                                        <Offcanvas.Header closeButton>
                                                        <Offcanvas.Title>  
                                                    <div>
                                                        <img src="images/logo.png" alt="img"/>
                                                    </div>
                                                    </Offcanvas.Title>

                                                        </Offcanvas.Header>

                                                        <Offcanvas.Body>

                                                            <div className={styles.OffcanvasUlDev}>
                                                                <ul>
                                                                    <li><Link href="#">NATIONAL PARKS</Link></li>      
                                                                    <li><Link href="#">THEME PARKS</Link></li>
                                                                    <li><Link href="#">ROAD TRIPS</Link></li>
                                                                    <li> <Link href="#">WINE COUNTRY</Link></li>
                                                                    <li><Link href="#">HISTORIC LANDMARKS</Link></li>      
                                                                    <li><Link href="#">CITY BREAKS</Link></li>
                                                                    <li><Link href="#">LUXURY VACATIONS</Link></li>
                                                                    <li> <Link href="#">BEACH RESORTS</Link></li>
                                                                </ul>

                                                            </div>

                                                        </Offcanvas.Body>

                                            </Offcanvas>
                                        </>

                                    </div>
                                     
                                    <div className={styles.Menubar2Mid}>
                                        <ul>
                                            <li  className={styles.dropdown}>
                                               <Link href="#">BEACH</Link>
                                               <div className={styles.dropdownItems}>
                                                    <ul>

                                                            <li><Link href="#">Home Page1</Link></li>
                                                            <li><Link href="#">Home Page2</Link></li>
                                                            <li> <Link href="#">Home Page3</Link></li>
                                                            <li> <Link className={styles.lastli} href="#">Home Page4</Link></li>

                                                    </ul>
                                               </div>
                                            </li>
                                            <li><Link href="#">FAMILY TOUR</Link></li>
                                            <li><Link href="#">ROMANTIC</Link></li>
                                            <li><Link href="#">WILDLIFE</Link></li>
                                            <li> <Link href="#">WEEKEND</Link></li>
                                            <li><Link href="#">ADVENTURE</Link></li>
                                           
                                        </ul>
                                    </div>

                                    <div className={styles.Menubar2Right}>
                                      
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                  </Container>
                </section>


            {/* ================================================================================================
                    Banner Bg
            ====================================================================================================*/}   

        </section>
    
    </>

  )
  
}

export default Menubar